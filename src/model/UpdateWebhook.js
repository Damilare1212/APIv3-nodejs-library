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
    root.SibApiV3Sdk.UpdateWebhook = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateWebhook model module.
   * @module model/UpdateWebhook
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>UpdateWebhook</code>.
   * @alias module:model/UpdateWebhook
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateWebhook} obj Optional instance to populate.
   * @return {module:model/UpdateWebhook} The populated <code>UpdateWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], ['String']);
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
    }
    return obj;
  }

  /**
   * URL of the webhook
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Description of the webhook
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * - Events triggering the webhook. Possible values for **Transactional** type webhook: #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` - Possible values for **Marketing** type webhook: #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered` - Possible values for **Inbound** type webhook: #### `inboundEmailProcessed` 
   * @member {Array.<module:model/UpdateWebhook.EventsEnum>} events
   */
  exports.prototype.events = undefined;

  /**
   * Inbound domain of webhook, used in case of event type `inbound`
   * @member {String} domain
   */
  exports.prototype.domain = undefined;



  /**
   * Allowed values for the <code>events</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventsEnum = {
    /**
     * value: "sent"
     * @const
     */
    sent: "sent",

    /**
     * value: "hardBounce"
     * @const
     */
    hardBounce: "hardBounce",

    /**
     * value: "softBounce"
     * @const
     */
    softBounce: "softBounce",

    /**
     * value: "blocked"
     * @const
     */
    blocked: "blocked",

    /**
     * value: "spam"
     * @const
     */
    spam: "spam",

    /**
     * value: "delivered"
     * @const
     */
    delivered: "delivered",

    /**
     * value: "request"
     * @const
     */
    request: "request",

    /**
     * value: "click"
     * @const
     */
    click: "click",

    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "deferred"
     * @const
     */
    deferred: "deferred",

    /**
     * value: "opened"
     * @const
     */
    opened: "opened",

    /**
     * value: "uniqueOpened"
     * @const
     */
    uniqueOpened: "uniqueOpened",

    /**
     * value: "unsubscribed"
     * @const
     */
    unsubscribed: "unsubscribed",

    /**
     * value: "listAddition"
     * @const
     */
    listAddition: "listAddition",

    /**
     * value: "contactUpdated"
     * @const
     */
    contactUpdated: "contactUpdated",

    /**
     * value: "contactDeleted"
     * @const
     */
    contactDeleted: "contactDeleted",

    /**
     * value: "inboundEmailProcessed"
     * @const
     */
    inboundEmailProcessed: "inboundEmailProcessed"
  };

  return exports;

}));
