function isValidInput(input) {
    return !!(input && input.trim() !== '');
}

function validateProductData(product) {
    const { nome, preco, quantidade } = product;
    if (!isValidInput(nome)) {
        return 'Product name is required.';
    }
    if (isNaN(preco) || preco <= 0) {
        return 'Product price must be a positive number.';
    }
    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return 'Product quantity must be a non-negative integer.';
    }
    return null; // No errors
}

function handleError(error) {
    console.error('Error:', error);
}

module.exports = {
    isValidInput,
    validateProductData,
    handleError
};