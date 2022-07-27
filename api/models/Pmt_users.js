/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require("bcrypt");
module.exports = {
    attributes: {
        create_day: { type: 'ref', columnType: "datetime", required: true },
        name: { type: 'string', required: true },
        employee_code: { type: 'number', required: true },
        title_IDS: { type: 'number', defaultsTo: 0, allowNull: false },
        body_IDT: { type: 'number', defaultsTo: 0, allowNull: false },
        login: { type: 'string', defaultsTo: '', allowNull: false },
        password: { type: 'string', allowNull: false },
        email: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 200,
            example: "mary.sue@example.com",
        },
        gender: { type: 'number', defaultsTo: 1, allowNull: false },
        birth: { type: 'ref', columnType: "datetime", defaultsTo: '0000-00-00' },
        company_id: { type: 'number', defaultsTo: 000, allowNull: false },
        address_IDT: { type: 'number', defaultsTo: 000, allowNull: false },
        job_title_IDS: { type: 'number', defaultsTo: 000, allowNull: false },
        phone: { type: 'string', defaultsTo: '', allowNull: false },
        address: { type: 'string', allowNull: false },
        personal_email_id: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 200,
            example: "mary.sue@example.com",
        },
        skype_id: { type: 'string', allowNull: false },
        joining_date: { type: 'ref', columnType: "datetime", allowNull: false },
        confirmation_date: { type: 'ref', columnType: "datetime", allowNull: false },
        code: { type: 'string', defaultsTo: '', allowNull: false },
        status_id: { type: 'number', defaultsTo: 0, allowNull: false },
        status_name: { type: 'string', defaultsTo: '0', allowNull: false },
        active_user: { type: 'number', defaultsTo: 0 },
        employment_status: { type: 'string', isIn: ['0', '1', '2'], columnType: "enum('0','1','2')", allowNull: false },
        production: { type: 'string', isIn: ['yes', 'no', 'na'], columnType: "enum('yes',no','na')", defaultsTo: 'no', allowNull: false }
    },
    comparePassword(password, pass) {
        return new Promise(function (resolve, reject) {
            bcrypt.compare(password, pass, (err, match) => {
                if (err) {
                    sails.log.error(err);
                    return reject({ error: "Something went wrong!" });
                }
                if (match) return resolve();
                else return reject({ error: "Mismatch passwords" });
            });
        });
    },
};

