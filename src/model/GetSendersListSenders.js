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
    define(['ApiClient', 'model/GetSendersListIps'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetSendersListIps'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetSendersListSenders = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetSendersListIps);
  }
}(this, function(ApiClient, GetSendersListIps) {
  'use strict';

  /**
   * The GetSendersListSenders model module.
   * @module model/GetSendersListSenders
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetSendersListSenders</code>.
   * @alias module:model/GetSendersListSenders
   * @class
   * @param id {Number} Id of the sender
   * @param name {String} From Name associated to the sender
   * @param email {String} From Email associated to the sender
   * @param active {Boolean} Status of sender (true=activated, false=deactivated)
   */
  var exports = function(id, name, email, active) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.active = active;
  };

  /**
   * Constructs a <code>GetSendersListSenders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSendersListSenders} obj Optional instance to populate.
   * @return {module:model/GetSendersListSenders} The populated <code>GetSendersListSenders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('ips'))
        obj.ips = ApiClient.convertToType(data['ips'], [GetSendersListIps]);
    }
    return obj;
  }

  /**
   * Id of the sender
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * From Name associated to the sender
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * From Email associated to the sender
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Status of sender (true=activated, false=deactivated)
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * List of dedicated IP(s) available in the account. This data is displayed only for dedicated IPs
   * @member {Array.<module:model/GetSendersListIps>} ips
   */
  exports.prototype.ips = undefined;


  return exports;

}));
