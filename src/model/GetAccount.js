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
    define(['ApiClient', 'model/GetAccountMarketingAutomation', 'model/GetAccountPlan', 'model/GetAccountRelay', 'model/GetExtendedClient', 'model/GetExtendedClientAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAccountMarketingAutomation'), require('./GetAccountPlan'), require('./GetAccountRelay'), require('./GetExtendedClient'), require('./GetExtendedClientAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetAccount = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetAccountMarketingAutomation, root.SibApiV3Sdk.GetAccountPlan, root.SibApiV3Sdk.GetAccountRelay, root.SibApiV3Sdk.GetExtendedClient, root.SibApiV3Sdk.GetExtendedClientAddress);
  }
}(this, function(ApiClient, GetAccountMarketingAutomation, GetAccountPlan, GetAccountRelay, GetExtendedClient, GetExtendedClientAddress) {
  'use strict';

  /**
   * The GetAccount model module.
   * @module model/GetAccount
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetAccount</code>.
   * @alias module:model/GetAccount
   * @class
   * @extends module:model/GetExtendedClient
   * @param email {String} Login Email
   * @param firstName {String} First Name
   * @param lastName {String} Last Name
   * @param companyName {String} Name of the company
   * @param address {module:model/GetExtendedClientAddress} 
   * @param plan {Array.<module:model/GetAccountPlan>} Information about your plans and credits
   * @param relay {module:model/GetAccountRelay} 
   */
  var exports = function(email, firstName, lastName, companyName, address, plan, relay) {
    GetExtendedClient.call(this, email, firstName, lastName, companyName, address);
    this.plan = plan;
    this.relay = relay;
  };

  /**
   * Constructs a <code>GetAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccount} obj Optional instance to populate.
   * @return {module:model/GetAccount} The populated <code>GetAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      GetExtendedClient.constructFromObject(data, obj);
      if (data.hasOwnProperty('plan'))
        obj.plan = ApiClient.convertToType(data['plan'], [GetAccountPlan]);
      if (data.hasOwnProperty('relay'))
        obj.relay = GetAccountRelay.constructFromObject(data['relay']);
      if (data.hasOwnProperty('marketingAutomation'))
        obj.marketingAutomation = GetAccountMarketingAutomation.constructFromObject(data['marketingAutomation']);
    }
    return obj;
  }

  exports.prototype = Object.create(GetExtendedClient.prototype);
  exports.prototype.constructor = exports;
  /**
   * Information about your plans and credits
   * @member {Array.<module:model/GetAccountPlan>} plan
   */
  exports.prototype.plan = undefined;

  /**
   * @member {module:model/GetAccountRelay} relay
   */
  exports.prototype.relay = undefined;

  /**
   * @member {module:model/GetAccountMarketingAutomation} marketingAutomation
   */
  exports.prototype.marketingAutomation = undefined;


  return exports;

}));
