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
    define(['ApiClient', 'model/UpdateEmailCampaignRecipients', 'model/UpdateEmailCampaignSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpdateEmailCampaignRecipients'), require('./UpdateEmailCampaignSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.UpdateEmailCampaign = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.UpdateEmailCampaignRecipients, root.SibApiV3Sdk.UpdateEmailCampaignSender);
  }
}(this, function(ApiClient, UpdateEmailCampaignRecipients, UpdateEmailCampaignSender) {
  'use strict';

  /**
   * The UpdateEmailCampaign model module.
   * @module model/UpdateEmailCampaign
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>UpdateEmailCampaign</code>.
   * @alias module:model/UpdateEmailCampaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateEmailCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateEmailCampaign} obj Optional instance to populate.
   * @return {module:model/UpdateEmailCampaign} The populated <code>UpdateEmailCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('sender'))
        obj.sender = UpdateEmailCampaignSender.constructFromObject(data['sender']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('htmlContent'))
        obj.htmlContent = ApiClient.convertToType(data['htmlContent'], 'String');
      if (data.hasOwnProperty('htmlUrl'))
        obj.htmlUrl = ApiClient.convertToType(data['htmlUrl'], 'String');
      if (data.hasOwnProperty('scheduledAt'))
        obj.scheduledAt = ApiClient.convertToType(data['scheduledAt'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('replyTo'))
        obj.replyTo = ApiClient.convertToType(data['replyTo'], 'String');
      if (data.hasOwnProperty('toField'))
        obj.toField = ApiClient.convertToType(data['toField'], 'String');
      if (data.hasOwnProperty('recipients'))
        obj.recipients = UpdateEmailCampaignRecipients.constructFromObject(data['recipients']);
      if (data.hasOwnProperty('attachmentUrl'))
        obj.attachmentUrl = ApiClient.convertToType(data['attachmentUrl'], 'String');
      if (data.hasOwnProperty('inlineImageActivation'))
        obj.inlineImageActivation = ApiClient.convertToType(data['inlineImageActivation'], 'Boolean');
      if (data.hasOwnProperty('mirrorActive'))
        obj.mirrorActive = ApiClient.convertToType(data['mirrorActive'], 'Boolean');
      if (data.hasOwnProperty('recurring'))
        obj.recurring = ApiClient.convertToType(data['recurring'], 'Boolean');
      if (data.hasOwnProperty('footer'))
        obj.footer = ApiClient.convertToType(data['footer'], 'String');
      if (data.hasOwnProperty('header'))
        obj.header = ApiClient.convertToType(data['header'], 'String');
      if (data.hasOwnProperty('utmCampaign'))
        obj.utmCampaign = ApiClient.convertToType(data['utmCampaign'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], Object);
      if (data.hasOwnProperty('sendAtBestTime'))
        obj.sendAtBestTime = ApiClient.convertToType(data['sendAtBestTime'], 'Boolean');
      if (data.hasOwnProperty('abTesting'))
        obj.abTesting = ApiClient.convertToType(data['abTesting'], 'Boolean');
      if (data.hasOwnProperty('subjectA'))
        obj.subjectA = ApiClient.convertToType(data['subjectA'], 'String');
      if (data.hasOwnProperty('subjectB'))
        obj.subjectB = ApiClient.convertToType(data['subjectB'], 'String');
      if (data.hasOwnProperty('splitRule'))
        obj.splitRule = ApiClient.convertToType(data['splitRule'], 'Number');
      if (data.hasOwnProperty('winnerCriteria'))
        obj.winnerCriteria = ApiClient.convertToType(data['winnerCriteria'], 'String');
      if (data.hasOwnProperty('winnerDelay'))
        obj.winnerDelay = ApiClient.convertToType(data['winnerDelay'], 'Number');
      if (data.hasOwnProperty('ipWarmupEnable'))
        obj.ipWarmupEnable = ApiClient.convertToType(data['ipWarmupEnable'], 'Boolean');
      if (data.hasOwnProperty('initialQuota'))
        obj.initialQuota = ApiClient.convertToType(data['initialQuota'], 'Number');
      if (data.hasOwnProperty('increaseRate'))
        obj.increaseRate = ApiClient.convertToType(data['increaseRate'], 'Number');
    }
    return obj;
  }

  /**
   * Tag of the campaign
   * @member {String} tag
   */
  exports.prototype.tag = undefined;

  /**
   * @member {module:model/UpdateEmailCampaignSender} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Name of the campaign
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Body of the message (HTML version). If the campaign is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that campaign. REQUIRED if htmlUrl is empty
   * @member {String} htmlContent
   */
  exports.prototype.htmlContent = undefined;

  /**
   * Url which contents the body of the email message. REQUIRED if htmlContent is empty
   * @member {String} htmlUrl
   */
  exports.prototype.htmlUrl = undefined;

  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part).
   * @member {String} scheduledAt
   */
  exports.prototype.scheduledAt = undefined;

  /**
   * Subject of the campaign
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * Email on which campaign recipients will be able to reply to
   * @member {String} replyTo
   */
  exports.prototype.replyTo = undefined;

  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @member {String} toField
   */
  exports.prototype.toField = undefined;

  /**
   * @member {module:model/UpdateEmailCampaignRecipients} recipients
   */
  exports.prototype.recipients = undefined;

  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @member {String} attachmentUrl
   */
  exports.prototype.attachmentUrl = undefined;

  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email. You cannot send a campaign of more than 4MB with images embedded in the email. Campaigns with the images embedded in the email must be sent to less than 5000 contacts.
   * @member {Boolean} inlineImageActivation
   * @default false
   */
  exports.prototype.inlineImageActivation = false;

  /**
   * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
   * @member {Boolean} mirrorActive
   */
  exports.prototype.mirrorActive = undefined;

  /**
   * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
   * @member {Boolean} recurring
   * @default false
   */
  exports.prototype.recurring = false;

  /**
   * Footer of the email campaign
   * @member {String} footer
   */
  exports.prototype.footer = undefined;

  /**
   * Header of the email campaign
   * @member {String} header
   */
  exports.prototype.header = undefined;

  /**
   * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
   * @member {String} utmCampaign
   */
  exports.prototype.utmCampaign = undefined;

  /**
   * Pass the set of attributes to customize the type 'classic' campaign. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. The 'params' field will get updated, only if the campaign is in New Template Language, else ignored. The New Template Language is dependent on the values of 'subject', 'htmlContent/htmlUrl', 'sender.name' & 'toField'
   * @member {Object} params
   */
  exports.prototype.params = undefined;

  /**
   * Set this to true if you want to send your campaign at best time. Note:- if true, warmup ip will be disabled.
   * @member {Boolean} sendAtBestTime
   */
  exports.prototype.sendAtBestTime = undefined;

  /**
   * Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. 'subjectA', 'subjectB', 'splitRule', 'winnerCriteria' & 'winnerDelay' will be considered if abTesting is set to true. 'subject' if passed is ignored.  Can be set to true only if 'sendAtBestTime' is 'false'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
   * @member {Boolean} abTesting
   * @default false
   */
  exports.prototype.abTesting = false;

  /**
   * Subject A of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value
   * @member {String} subjectA
   */
  exports.prototype.subjectA = undefined;

  /**
   * Subject B of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value
   * @member {String} subjectB
   */
  exports.prototype.subjectB = undefined;

  /**
   * Add the size of your test groups. Considered if abTesting = true. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
   * @member {Number} splitRule
   */
  exports.prototype.splitRule = undefined;

  /**
   * Choose the metrics that will determinate the winning version. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerCriteria' is ignored if passed or alreday exist in record
   * @member {module:model/UpdateEmailCampaign.WinnerCriteriaEnum} winnerCriteria
   */
  exports.prototype.winnerCriteria = undefined;

  /**
   * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerDelay' is ignored if passed or alreday exist in record
   * @member {Number} winnerDelay
   */
  exports.prototype.winnerDelay = undefined;

  /**
   * Available for dedicated ip clients. Set this to true if you wish to warm up your ip.
   * @member {Boolean} ipWarmupEnable
   * @default false
   */
  exports.prototype.ipWarmupEnable = false;

  /**
   * Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
   * @member {Number} initialQuota
   */
  exports.prototype.initialQuota = undefined;

  /**
   * Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
   * @member {Number} increaseRate
   */
  exports.prototype.increaseRate = undefined;



  /**
   * Allowed values for the <code>winnerCriteria</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WinnerCriteriaEnum = {
    /**
     * value: "open"
     * @const
     */
    open: "open",

    /**
     * value: "click"
     * @const
     */
    click: "click"
  };

  return exports;

}));
