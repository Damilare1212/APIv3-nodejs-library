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
    define(['ApiClient', 'model/GetTransacBlockedContactsReason'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTransacBlockedContactsReason'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetTransacBlockedContactsContacts = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetTransacBlockedContactsReason);
  }
}(this, function(ApiClient, GetTransacBlockedContactsReason) {
  'use strict';

  /**
   * The GetTransacBlockedContactsContacts model module.
   * @module model/GetTransacBlockedContactsContacts
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetTransacBlockedContactsContacts</code>.
   * @alias module:model/GetTransacBlockedContactsContacts
   * @class
   * @param email {String} Email address of the blocked or unsubscribed contact
   * @param senderEmail {String} Sender email address of the blocked or unsubscribed contact
   * @param reason {module:model/GetTransacBlockedContactsReason} 
   * @param blockedAt {String} Date when the contact was blocked or unsubscribed on
   */
  var exports = function(email, senderEmail, reason, blockedAt) {
    this.email = email;
    this.senderEmail = senderEmail;
    this.reason = reason;
    this.blockedAt = blockedAt;
  };

  /**
   * Constructs a <code>GetTransacBlockedContactsContacts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacBlockedContactsContacts} obj Optional instance to populate.
   * @return {module:model/GetTransacBlockedContactsContacts} The populated <code>GetTransacBlockedContactsContacts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('senderEmail'))
        obj.senderEmail = ApiClient.convertToType(data['senderEmail'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = GetTransacBlockedContactsReason.constructFromObject(data['reason']);
      if (data.hasOwnProperty('blockedAt'))
        obj.blockedAt = ApiClient.convertToType(data['blockedAt'], 'String');
    }
    return obj;
  }

  /**
   * Email address of the blocked or unsubscribed contact
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Sender email address of the blocked or unsubscribed contact
   * @member {String} senderEmail
   */
  exports.prototype.senderEmail = undefined;

  /**
   * @member {module:model/GetTransacBlockedContactsReason} reason
   */
  exports.prototype.reason = undefined;

  /**
   * Date when the contact was blocked or unsubscribed on
   * @member {String} blockedAt
   */
  exports.prototype.blockedAt = undefined;


  return exports;

}));
