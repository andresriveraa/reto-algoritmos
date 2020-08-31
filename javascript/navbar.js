import setResponseForm from './response.js';

let actualShowForm = 1;

export const showThisForm = (numberForm) => {
  let actualForm = document.getElementById(`form${numberForm}`);
  if (!actualForm.classList.contains('show')){
    actualForm.classList.remove('hide');
    actualForm.classList.add('show');
    hideThisForm()
  } 
  actualShowForm = numberForm;
  setResponseForm(0)
}

export const hideThisForm = () => {
  let actualForm = document.getElementById(`form${actualShowForm}`);
  actualForm.classList.add('hide');
  actualForm.classList.remove('show');
}
