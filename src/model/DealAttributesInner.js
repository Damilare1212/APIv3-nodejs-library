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
    root.SibApiV3Sdk.DealAttributesInner = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DealAttributesInner model module.
   * @module model/DealAttributesInner
   * @version 8.4.1
   */

  /**
   * Constructs a new <code>DealAttributesInner</code>.
   * List of attributes
   * @alias module:model/DealAttributesInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DealAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealAttributesInner} obj Optional instance to populate.
   * @return {module:model/DealAttributesInner} The populated <code>DealAttributesInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('internalName'))
        obj.internalName = ApiClient.convertToType(data['internalName'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('attributeTypeName'))
        obj.attributeTypeName = ApiClient.convertToType(data['attributeTypeName'], 'String');
      if (data.hasOwnProperty('attributeOptions'))
        obj.attributeOptions = ApiClient.convertToType(data['attributeOptions'], [Object]);
      if (data.hasOwnProperty('isRequired'))
        obj.isRequired = ApiClient.convertToType(data['isRequired'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} internalName
   */
  exports.prototype.internalName = undefined;

  /**
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {String} attributeTypeName
   */
  exports.prototype.attributeTypeName = undefined;

  /**
   * @member {Array.<Object>} attributeOptions
   */
  exports.prototype.attributeOptions = undefined;

  /**
   * @member {Boolean} isRequired
   */
  exports.prototype.isRequired = undefined;


  return exports;

}));