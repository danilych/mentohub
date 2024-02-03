export function objectToFormData(obj: any) {
    const formData = new FormData();
  
    for (const key in obj) {
      // @ts-ignore
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
  
    return formData;
  }