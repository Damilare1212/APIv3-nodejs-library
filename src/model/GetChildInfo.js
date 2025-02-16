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
    define(['ApiClient', 'model/GetChildInfoApiKeys', 'model/GetChildInfoCredits', 'model/GetChildInfoStatistics', 'model/GetClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetChildInfoApiKeys'), require('./GetChildInfoCredits'), require('./GetChildInfoStatistics'), require('./GetClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetChildInfo = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetChildInfoApiKeys, root.SibApiV3Sdk.GetChildInfoCredits, root.SibApiV3Sdk.GetChildInfoStatistics, root.SibApiV3Sdk.GetClient);
  }
}(this, function(ApiClient, GetChildInfoApiKeys, GetChildInfoCredits, GetChildInfoStatistics, GetClient) {
  'use strict';

  /**
   * The GetChildInfo model module.
   * @module model/GetChildInfo
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetChildInfo</code>.
   * @alias module:model/GetChildInfo
   * @class
   * @extends module:model/GetClient
   * @param email {String} Login Email
   * @param firstName {String} First Name
   * @param lastName {String} Last Name
   * @param companyName {String} Name of the company
   * @param password {String} The encrypted password of child account
   */
  var exports = function(email, firstName, lastName, companyName, password) {
    GetClient.call(this, email, firstName, lastName, companyName);
    this.password = password;
  };

  /**
   * Constructs a <code>GetChildInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChildInfo} obj Optional instance to populate.
   * @return {module:model/GetChildInfo} The populated <code>GetChildInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      GetClient.constructFromObject(data, obj);
      if (data.hasOwnProperty('credits'))
        obj.credits = GetChildInfoCredits.constructFromObject(data['credits']);
      if (data.hasOwnProperty('statistics'))
        obj.statistics = GetChildInfoStatistics.constructFromObject(data['statistics']);
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('ips'))
        obj.ips = ApiClient.convertToType(data['ips'], ['String']);
      if (data.hasOwnProperty('apiKeys'))
        obj.apiKeys = GetChildInfoApiKeys.constructFromObject(data['apiKeys']);
    }
    return obj;
  }

  exports.prototype = Object.create(GetClient.prototype);
  exports.prototype.constructor = exports;
  /**
   * @member {module:model/GetChildInfoCredits} credits
   */
  exports.prototype.credits = undefined;

  /**
   * @member {module:model/GetChildInfoStatistics} statistics
   */
  exports.prototype.statistics = undefined;

  /**
   * The encrypted password of child account
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * IP(s) associated to a child account user
   * @member {Array.<String>} ips
   */
  exports.prototype.ips = undefined;

  /**
   * @member {module:model/GetChildInfoApiKeys} apiKeys
   */
  exports.prototype.apiKeys = undefined;


  return exports;

}));
