/*
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.Company = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Company model module.
   * @module model/Company
   * @version 8.4.1
   */

  /**
   * Constructs a new <code>Company</code>.
   * Company Details
   * @alias module:model/Company
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Company} obj Optional instance to populate.
   * @return {module:model/Company} The populated <code>Company</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
      if (data.hasOwnProperty('linkedContactsIds'))
        obj.linkedContactsIds = ApiClient.convertToType(data['linkedContactsIds'], ['Number']);
      if (data.hasOwnProperty('linkedDealsIds'))
        obj.linkedDealsIds = ApiClient.convertToType(data['linkedDealsIds'], ['String']);
    }
    return obj;
  }

  /**
   * Unique company id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Company attributes with values
   * @member {Object} attributes
   */
  exports.prototype.attributes = undefined;

  /**
   * Contact ids for contacts linked to this company
   * @member {Array.<Number>} linkedContactsIds
   */
  exports.prototype.linkedContactsIds = undefined;

  /**
   * Deals ids for companies linked to this company
   * @member {Array.<String>} linkedDealsIds
   */
  exports.prototype.linkedDealsIds = undefined;


  return exports;

}));
