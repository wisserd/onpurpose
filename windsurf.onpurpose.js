module.exports = {
  // Windsurf configuration for OnPurpose marketplace
  name: 'onpurpose-marketplace',
  version: '1.0.0',
  
  // Database configuration
  database: {
    type: 'postgresql',
    ssl: true,
    migrations: true,
    seeds: false
  },
  
  // Authentication settings
  auth: {
    jwt: true,
    bcrypt: true,
    sessions: false
  },
  
  // Payment integration
  payments: {
    stripe: {
      enabled: true,
      webhooks: true,
      connect: true
    }
  },
  
  // Email configuration
  email: {
    provider: 'sendgrid',
    templates: true,
    notifications: true
  },
  
  // API settings
  api: {
    cors: true,
    rateLimit: true,
    validation: true,
    documentation: false
  },
  
  // Security features
  security: {
    helmet: true,
    sanitization: true,
    https: true
  },
  
  // Monitoring and logging
  monitoring: {
    winston: true,
    sentry: true,
    healthChecks: true
  },
  
  // File uploads
  uploads: {
    cloudinary: true,
    maxSize: '10MB',
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp']
  }
};
