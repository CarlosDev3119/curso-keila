
export const generateHobbiesList = (hobbiesList:  (string)[]): string => {
  
  let hobbies: string = '';
  
  for(let i: number = 0; i < hobbiesList.length; i++ ){
    hobbies += `<li>${ hobbiesList[i] }</li>`
  }

  return hobbies;
}
