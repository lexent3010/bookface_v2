export const updateObjectInArray = (items: any, objPropName: string, itemsId: number, newObjProps: any) => {
  return items.map((item: any) => {
    if (item[objPropName] === itemsId) {
      return { ...item, ...newObjProps }
    }
    return item
  })
}
