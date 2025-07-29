// Centralized routing and navigation utilities
export interface RouteAction {
  type: 'scroll' | 'external' | 'form' | 'modal'
  target: string
  data?: Record<string, unknown>
}

// Smooth scroll utility with offset for fixed navbar
export const scrollToSection = (selector: string, offset: number = 80) => {
  const element = document.querySelector(selector) as HTMLElement
  if (element) {
    const offsetTop = element.offsetTop - offset
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    })
  }
}

// Handle different types of route actions
export const handleRouteAction = (action: RouteAction) => {
  switch (action.type) {
    case 'scroll':
      scrollToSection(action.target)
      break
    case 'external':
      window.open(action.target, '_blank', 'noopener,noreferrer')
      break
    case 'form':
      // Handle form submissions
      handleFormSubmission(action.target, action.data)
      break
    case 'modal':
      // Handle modal opening
      break
  }
}

// Form submission handler
const handleFormSubmission = async (formType: string, data?: Record<string, unknown>) => {
  // This would integrate with your backend API
  console.log(`Submitting ${formType} form`, data)
  
  switch (formType) {
    case 'trial':
      // Handle trial signup
      scrollToSection('#contact')
      break
    case 'contact':
      // Handle contact form
      break
    case 'demo':
      // Handle demo request
      break
  }
}

// Common route definitions
export const routes = {
  navigation: {
    features: '#features',
    pricing: '#pricing',
    testimonials: '#testimonials',
    faq: '#faq',
    contact: '#contact'
  },
  cta: {
    startTrial: { type: 'form' as const, target: 'trial' },
    contactSales: { type: 'scroll' as const, target: '#contact' },
    scheduleDemo: { type: 'form' as const, target: 'demo' },
    watchDemo: { type: 'modal' as const, target: 'demo-video' }
  },
  external: {
    documentation: 'https://docs.admybrand.com',
    api: 'https://api.admybrand.com/docs',
    support: 'https://support.admybrand.com',
    status: 'https://status.admybrand.com'
  }
}

// Success/error handling for user feedback
export const showNotification = (type: 'success' | 'error' | 'warning' | 'info', title: string, message?: string) => {
  // This integrates with the notification system
  // The actual implementation would use the useNotifications hook
  console.log(`${type}: ${title}`, message)
  
  // You can enhance this to work with the notification context:
  // const { addNotification } = useNotifications()
  // addNotification({ type, title, message })
}

// Enhanced form submission with user feedback
export const submitFormWithFeedback = async (
  formType: string, 
  data: Record<string, unknown>,
  onSuccess?: (result: Record<string, unknown>) => void,
  onError?: (error: unknown) => void
) => {
  try {
    showNotification('info', 'Processing...', 'Please wait while we handle your request.')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const result = { success: true, formType, data }
    
    showNotification('success', 'Success!', `Your ${formType} request has been submitted.`)
    onSuccess?.(result)
    
    return result
  } catch (error) {
    showNotification('error', 'Error', 'Something went wrong. Please try again.')
    onError?.(error)
    throw error
  }
} 