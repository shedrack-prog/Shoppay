export const validateEmail = (email) => {
  const regextSt =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regextSt.test(email);
};

export const validateCreateProduct = (product, images) => {
  let sizes = product.sizes;
  let details = product.details;
  let questions = product.questions;
  const checks = [
    {
      msg: 'Name, Description, Brand added successfully.',
      type: 'success',
    },
  ];
  if (images.length < 3) {
    checks.push({
      msg: `Choose at least 3 images (${3 - images.length} remaining).`,
      type: 'error',
    });
  } else {
    checks.push({
      msg: `${images.length} images chosen.`,
      type: 'success',
    });
  }
  if (!product.color.color) {
    checks.push({
      msg: `Choose a main product color.`,
      type: 'error',
    });
  } else {
    checks.push({
      msg: `Product color has been chosen.`,
      type: 'success',
    });
  }
  if (!product.color.image) {
    checks.push({
      msg: `Choose a product style image.`,
      type: 'error',
    });
  } else {
    checks.push({
      msg: `Product style image been choosen.`,
      type: 'success',
    });
  }
  for (var i = 0; i < sizes.length; i++) {
    if (sizes[i].qty == '' || sizes[i].price == '' || sizes[i].size == '') {
      checks.push({
        msg: `Please fill all information on sizes.`,
        type: 'error',
      });
      break;
    } else {
      checks.push({
        msg: `At least one size/qty/price added.`,
        type: 'success',
      });
    }
  }
  for (var i = 0; i < details.length; i++) {
    if (details[i].name == '' || details[i].value == '') {
      checks.push({
        msg: `Please fill all information on details.`,
        type: 'error',
      });
      break;
    } else {
      checks.push({
        msg: `At least one detail added.`,
        type: 'success',
      });
    }
  }
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].question == '' || questions[i].answer == '') {
      checks.push({
        msg: `Please fill all information on questions.`,
        type: 'error',
      });
      break;
    } else {
      checks.push({
        msg: `At least one question added.`,
        type: 'success',
      });
    }
  }
  var s_test = checks.find((c) => c.type == 'error');
  if (s_test) {
    return checks;
  } else {
    return 'valid';
  }
};
