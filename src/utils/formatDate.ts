export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
  }