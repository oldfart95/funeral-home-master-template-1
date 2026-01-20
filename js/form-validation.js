/**
 * Form Validation Utility
 * Provides client-side validation and error message handling for contact forms
 */

/**
 * Validates email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Client-side form validation
 * Returns array of error messages
 */
function validateForm(formData) {
  const errors = [];
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push("Please enter your full name");
  }
  
  // Email validation
  if (!formData.email || formData.email.trim().length === 0) {
    errors.push("Please enter your email address");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Please enter a valid email address");
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push("Please enter a message (at least 10 characters)");
  }
  
  return errors;
}

/**
 * Spanish version of client-side form validation
 */
function validateFormES(formData) {
  const errors = [];
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push("Por favor ingrese su nombre completo");
  }
  
  // Email validation
  if (!formData.email || formData.email.trim().length === 0) {
    errors.push("Por favor ingrese su dirección de correo electrónico");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Por favor ingrese una dirección de correo electrónico válida");
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push("Por favor ingrese un mensaje (al menos 10 caracteres)");
  }
  
  return errors;
}

/**
 * Parses API error response and extracts user-friendly error messages
 * Handles both Zod validation errors and other error types
 */
function parseApiError(data, isSpanish = false) {
  // If there are detailed validation errors from Zod
  if (data.details && Array.isArray(data.details) && data.details.length > 0) {
    const messages = data.details.map(error => {
      // Map Zod error messages to user-friendly messages
      const field = error.path?.[0] || 'field';
      const message = error.message || '';
      
      if (isSpanish) {
        // Spanish error messages
        if (field === 'name') {
          if (message.includes('at least 2')) {
            return 'Por favor ingrese su nombre completo';
          }
        } else if (field === 'email') {
          if (message.includes('Invalid email')) {
            return 'Por favor ingrese una dirección de correo electrónico válida';
          } else if (message.includes('required')) {
            return 'Por favor ingrese su dirección de correo electrónico';
          }
        } else if (field === 'message') {
          if (message.includes('at least 10')) {
            return 'Por favor ingrese un mensaje (al menos 10 caracteres)';
          } else if (message.includes('required')) {
            return 'Por favor ingrese un mensaje';
          }
        }
        // Fallback to original message if no translation found
        return message;
      } else {
        // English error messages
        if (field === 'name') {
          if (message.includes('at least 2')) {
            return 'Please enter your full name';
          }
        } else if (field === 'email') {
          if (message.includes('Invalid email')) {
            return 'Please enter a valid email address';
          } else if (message.includes('required')) {
            return 'Please enter your email address';
          }
        } else if (field === 'message') {
          if (message.includes('at least 10')) {
            return 'Please enter a message (at least 10 characters)';
          } else if (message.includes('required')) {
            return 'Please enter a message';
          }
        }
        // Fallback to original message if no translation found
        return message;
      }
    });
    
    // Return all error messages, or combine them
    return messages.length === 1 ? messages[0] : messages.join('. ');
  }
  
  // Handle other error types
  if (data.error) {
    if (isSpanish) {
      // Translate common error messages to Spanish
      if (data.error.includes('Too many requests')) {
        return 'Demasiadas solicitudes. Por favor, intente nuevamente más tarde.';
      } else if (data.error.includes('Validation failed')) {
        return 'Por favor, verifique que todos los campos estén completos y sean válidos.';
      } else if (data.error.includes('error occurred')) {
        return 'Ocurrió un error. Por favor, intente nuevamente más tarde.';
      }
    } else {
      // English error messages
      if (data.error.includes('Too many requests')) {
        return 'Too many requests. Please try again later.';
      } else if (data.error.includes('Validation failed')) {
        return 'Please check that all fields are complete and valid.';
      }
    }
    return data.error;
  }
  
  // Default fallback message
  return isSpanish 
    ? 'Ocurrió un error. Por favor, intente nuevamente.'
    : 'An error occurred. Please try again.';
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateForm,
    validateFormES,
    parseApiError,
    isValidEmail
  };
}
