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
    root.SibApiV3Sdk.CreateDoiContact = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateDoiContact model module.
   * @module model/CreateDoiContact
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>CreateDoiContact</code>.
   * @alias module:model/CreateDoiContact
   * @class
   * @param email {String} Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
   * @param includeListIds {Array.<Number>} Lists under user account where contact should be added
   * @param templateId {Number} Id of the Double opt-in (DOI) template
   * @param redirectionUrl {String} URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag {{ params.DOIurl }}.
   */
  var exports = function(email, includeListIds, templateId, redirectionUrl) {
    this.email = email;
    this.includeListIds = includeListIds;
    this.templateId = templateId;
    this.redirectionUrl = redirectionUrl;
  };

  /**
   * Constructs a <code>CreateDoiContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDoiContact} obj Optional instance to populate.
   * @return {module:model/CreateDoiContact} The populated <code>CreateDoiContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
      if (data.hasOwnProperty('includeListIds'))
        obj.includeListIds = ApiClient.convertToType(data['includeListIds'], ['Number']);
      if (data.hasOwnProperty('excludeListIds'))
        obj.excludeListIds = ApiClient.convertToType(data['excludeListIds'], ['Number']);
      if (data.hasOwnProperty('templateId'))
        obj.templateId = ApiClient.convertToType(data['templateId'], 'Number');
      if (data.hasOwnProperty('redirectionUrl'))
        obj.redirectionUrl = ApiClient.convertToType(data['redirectionUrl'], 'String');
    }
    return obj;
  }

  /**
   * Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For eg. {'FNAME':'Elly', 'LNAME':'Roger'}
   * @member {Object} attributes
   */
  exports.prototype.attributes = undefined;

  /**
   * Lists under user account where contact should be added
   * @member {Array.<Number>} includeListIds
   */
  exports.prototype.includeListIds = undefined;

  /**
   * Lists under user account where contact should not be added
   * @member {Array.<Number>} excludeListIds
   */
  exports.prototype.excludeListIds = undefined;

  /**
   * Id of the Double opt-in (DOI) template
   * @member {Number} templateId
   */
  exports.prototype.templateId = undefined;

  /**
   * URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag {{ params.DOIurl }}.
   * @member {String} redirectionUrl
   */
  exports.prototype.redirectionUrl = undefined;


  return exports;

}));
