// js/utils/notifications.js

// 1. Gestión de permisos
export const NotificationManager = {
    permissionStatus: 'default',
  
    async requestPermission() {
      if (!('Notification' in window)) {
        console.warn('Notifications API no soportada en este navegador');
        return false;
      }
  
      try {
        const permission = await Notification.requestPermission();
        this.permissionStatus = permission;
        return permission === 'granted';
      } catch (error) {
        console.error('Error al solicitar permisos:', error);
        return false;
      }
    },
  
    get currentPermission() {
      return this.permissionStatus;
    }
  };
  
  // 2. Creación de notificaciones
  export function createNotification(title, options = {}) {
    const defaults = {
      body: 'Timer completado',
      icon: '/assets/icons/clock-icon.png',
      badge: '/assets/badges/timer-badge.png',
      vibrate: [200, 100, 200],
      requireInteraction: true
    };
  
    if (Notification.permission === 'granted') {
      return new Notification(title, { ...defaults, ...options });
    }
    
    return null;
  }
  
  // 3. Notificación preconfigurada para el timer
  export function showTimerNotification() {
    return createNotification('Timer Finalizado', {
      body: '¡El tiempo establecido ha concluido!',
      actions: [
        { action: 'restart', title: '⚡ Reiniciar' },
        { action: 'close', title: '❌ Cerrar' }
      ]
    });
  }
  
  // 4. Sistema de manejo de errores
  export function handleNotificationError(error) {
    const errorMessages = {
      SecurityError: 'Notificaciones bloqueadas por configuración de seguridad',
      TypeError: 'Parámetros inválidos para la notificación',
      PermissionDeniedError: 'Permiso denegado por el usuario'
    };
  
    console.error(errorMessages[error.name] || `Error desconocido: ${error.message}`);
  }
  
  // Inicialización automática al cargar el módulo
  NotificationManager.requestPermission();
  