export const stringToDate=(date: string):Date=>{
  const dateParts=date.split('/').map((str: string):number=>parseInt(str));
  return new Date(
    dateParts[2],
    dateParts[1]-1,
    dateParts[0]
  )
}