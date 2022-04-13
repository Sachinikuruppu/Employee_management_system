import joi from "joi"

const EmployeeValidations = (employee_for_validation) => {
    const schema = joi.object({
        name: joi.string().min(3).max(255).required().messages({
            "string.empty": `Employee Name is required.`,
            "any.required": `Employee Name is required.`,
            "string.base": `Employee Name should be a type of 'text'.`,
           
        }),
        empNumber: joi.string().required().messages({
            "string.empty": `Employee Number is required.`,
            "any.required": `Employee Number is required.`,
            "string.base": `Employee Number should be a type of 'text'.`,
       
        }),
        // dateOfBirth: joi.string().positive().required().messages({
        //     "number.positive": `dateofbirth no can not be negative value.`,
        //     "any.required": `dateofbirth Number is required.`,
        //     "number.base": `Please enter dateofbirth Number.`,
            
        // }),
        dateOfBirth: joi.string().required().messages({
            "string.empty": `Date of Birth is required.`,
            "any.required": `Employee Number is required.`,
            "string.base": `Employee Number should be a type of 'text'.`,
       
        }),
        // email: joi.string().positive().required().messages({
        //     "number.positive": `email no can not be negative value.`,
        //     "any.required": `email format is required.`,
        //     "number.base": `Please enter email Number.`,
            
        // }),
        email: joi.string().required().messages({
            "string.empty": `E-mail is required.`,
            "any.required": `E-mail  is required.`,
            "string.base": `E-mail should be a type of 'text'.`,
       
        }),
    
       empType: joi.string().required().messages({
            "any.required": `Employee type is required.`,
            "date.base": `Please enter employee type.`,
        }),
        phoneNo: joi.number().positive().required().messages({
            "number.positive": `Phone no can not be negative value.`,
            "any.required": `Phone Number is required.`,
            "number.base": `Please enter Phone Number.`,
            
        }),
        Address: joi.string().required().messages({
            "string.empty": ` Address  is required.`,
            "any.required": ` Address  is required.`,
            "string.base": ` Address  should be a type of 'text'.`,
        }),
        joindate: joi.date().required().messages({
            "string.empty": ` Join Date  is required.`,
            "any.required": ` Join Date  is required.`,
            "string.base": ` Join Date  should be a type of 'text'.`,
            
        }),
        ivalutionDate: joi.date().required().messages({
            "string.empty": ` Ivalution Date is required.`,
            "any.required": ` Ivalution Date is required.`,
            "string.base": ` Ivalution Date should be a type of 'text'.`,
            
        }),

    });

    const result = schema.validate(employee_for_validation);

    if (result.error) {
        return {
            status: false,
            error: result.error.message,
        }
    } else {
        return {
            status: true
        }
    }
};

export default EmployeeValidations;