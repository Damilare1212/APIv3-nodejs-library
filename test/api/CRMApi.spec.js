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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.CRMApi();
  });

  describe('(package)', function() {
    describe('CRMApi', function() {
      describe('crmFilesIdDataGet', function() {
        it('should call crmFilesIdDataGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmFilesIdDataGet call and complete the assertions
          /*
          var id = "id_example";

          instance.crmFilesIdDataGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.FileData);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("/api/v1/files/61a88a2eb7a574180261234");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a88a2eb7a574180261234");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("example.png");
            expect(data.authorId).to.be.a('string');
            expect(data.authorId).to.be("61a5ce58y5d4795761045991");
            expect(data.author).to.be.a(Object);
            expect(data.author).to.be({"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}});
            expect(data.contactId).to.be.a('number');
            expect(data.contactId).to.be(1);
            {
              let dataCtr = data.dealIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.size).to.be.a('number');
            expect(data.size).to.be(10);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmFilesIdDelete', function() {
        it('should call crmFilesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for crmFilesIdDelete call
          /*
          var id = "id_example";

          instance.crmFilesIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmFilesIdGet', function() {
        it('should call crmFilesIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmFilesIdGet call
          /*
          var id = "id_example";

          instance.crmFilesIdGet(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmFilesPost', function() {
        it('should call crmFilesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for crmFilesPost call and complete the assertions
          /*
          var file = "/path/to/file.txt";
          var opts = {};
          opts.dealsIds = ["dealsIds_example"];

          instance.crmFilesPost(file, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.FileData);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("/api/v1/files/61a88a2eb7a574180261234");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a88a2eb7a574180261234");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("example.png");
            expect(data.authorId).to.be.a('string');
            expect(data.authorId).to.be("61a5ce58y5d4795761045991");
            expect(data.author).to.be.a(Object);
            expect(data.author).to.be({"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}});
            expect(data.contactId).to.be.a('number');
            expect(data.contactId).to.be(1);
            {
              let dataCtr = data.dealIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.size).to.be.a('number');
            expect(data.size).to.be(10);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmNotesIdDelete', function() {
        it('should call crmNotesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for crmNotesIdDelete call
          /*
          var id = "id_example";

          instance.crmNotesIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmNotesIdGet', function() {
        it('should call crmNotesIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmNotesIdGet call and complete the assertions
          /*
          var id = "id_example";

          instance.crmNotesIdGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Note);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad09");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("In communication with client for resolution of queries.");
            {
              let dataCtr = data.contactIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.dealIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.authorId).to.be.a(Object);
            expect(data.authorId).to.be({"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}});
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmNotesIdPatch', function() {
        it('should call crmNotesIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for crmNotesIdPatch call and complete the assertions
          /*
          var id = "id_example";
          var body = new SibApiV3Sdk.NoteData();
          body.text = "In communication with client for resolution of queries.";
          body.contactIds = [247,1,2];
          body.dealIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991"];

          instance.crmNotesIdPatch(id, body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Note);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad09");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("In communication with client for resolution of queries.");
            {
              let dataCtr = data.contactIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.dealIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.authorId).to.be.a(Object);
            expect(data.authorId).to.be({"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}});
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmNotesPost', function() {
        it('should call crmNotesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for crmNotesPost call and complete the assertions
          /*
          var body = new SibApiV3Sdk.NoteData();
          body.text = "In communication with client for resolution of queries.";
          body.contactIds = [247,1,2];
          body.dealIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991"];

          instance.crmNotesPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Note);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad09");
            expect(data.text).to.be.a('string');
            expect(data.text).to.be("In communication with client for resolution of queries.");
            {
              let dataCtr = data.contactIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.dealIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.authorId).to.be.a(Object);
            expect(data.authorId).to.be({"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}});
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksIdDelete', function() {
        it('should call crmTasksIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdDelete call
          /*
          var id = "id_example";

          instance.crmTasksIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksIdGet', function() {
        it('should call crmTasksIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdGet call and complete the assertions
          /*
          var id = "id_example";

          instance.crmTasksIdGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Task);
            expect(data.firstContact).to.be.a(SibApiV3Sdk.Contact);
                  expect(data.firstContact.virtualNextTask).to.be.a(Object);
              expect(data.firstContact.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
              expect(data.firstContact.email).to.be.a('string');
              expect(data.firstContact.email).to.be("contact@example.com");
              expect(data.firstContact.assignToId).to.be.a('string');
              expect(data.firstContact.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
              expect(data.firstContact.contactsId).to.be.a('number');
              expect(data.firstContact.contactsId).to.be(247);
              expect(data.firstContact.crmLists).to.be.a(Object);
              expect(data.firstContact.crmLists).to.be([43,58]);
              expect(data.firstContact.attributes).to.be.a(Object);
              expect(data.firstContact.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
              expect(data.firstContact.createdAt).to.be.a(Date);
              expect(data.firstContact.createdAt).to.be(2017-05-01T17:05:03.000Z);
              expect(data.firstContact.updatedAt).to.be.a(Date);
              expect(data.firstContact.updatedAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");
            expect(data.taskTypeId).to.be.a('string');
            expect(data.taskTypeId).to.be("61a5cd07ca1347c82306ad09");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Task: Connect with client");
            {
              let dataCtr = data.contactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.contacts;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SibApiV3Sdk.Contact);
                expect(data.virtualNextTask).to.be.a(Object);
                expect(data.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("contact@example.com");
                expect(data.assignToId).to.be.a('string');
                expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
                expect(data.contactsId).to.be.a('number');
                expect(data.contactsId).to.be(247);
                expect(data.crmLists).to.be.a(Object);
                expect(data.crmLists).to.be([43,58]);
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

                      }
            }
            {
              let dataCtr = data.dealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.companiesIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.assignToId).to.be.a('string');
            expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
            expect(data._date).to.be.a(Date);
            expect(data._date).to.be(2021-11-01T17:44:54.668Z);
            expect(data.duration).to.be.a('number');
            expect(data.duration).to.be(900000);
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("In communication with client for resolution of queries.");
            expect(data.done).to.be.a('boolean');
            expect(data.done).to.be(false);
            expect(data.reminder).to.be.a(SibApiV3Sdk.TaskReminder);
                  expect(data.reminder.value).to.be.a('number');
              expect(data.reminder.value).to.be(10);
              expect(data.reminder.unit).to.be.a('string');
              expect(data.reminder.unit).to.be("minutes");
              {
                let dataCtr = data.reminder.types;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.refs).to.be.a(Object);
            expect(data.refs).to.be({"dealsIds":[{"id":"61a5ce58c5d4795761045990","attributes":{"deal_name":"Deal Example","deal_owner":"5faab4b7f195bb3c4c31e62a","pipeline":"61122683f86562145185b489","deal_stage":"3d696d83-c75b-404d-b062-680186b8bbb","stage_updated_at":"2017-11-22T09:23:44.213Z","created_at":"2017-09-24T12:33:24.657Z","number_of_contacts":1,"last_updated_date":"2019-11-22T09:23:44.246Z","last_activity_date":"2017-09-30T06:44:15.765Z","number_of_activities":1,"close_date":"2019-11-21T18:30:00.000Z","actual_close_date":"2019-11-22T09:23:44.213Z","total_revenue":0},"linkedContactsIds":[247],"linkedCompaniesIds":[]}]});

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksIdPatch', function() {
        it('should call crmTasksIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksIdPatch call and complete the assertions
          /*
          var id = "id_example";
          var body = new SibApiV3Sdk.Body1();
          body.name = "Task: Connect with client";
          body.duration = 900000;
          body.taskTypeId = "61a5cd07ca1347c82306ad09";
          body._date = 2021-11-01T17:44:54.668Z;
          body.notes = "In communication with client for resolution of queries.";
          body.done = false;
          body.assignToId = "5faab4b7f195bb3c4c31e62a";
          body.contactsIds = [1,2,3];
          body.dealsIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.companiesIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.reminder = new SibApiV3Sdk.TaskReminder();
          body.reminder.value = 10;
          body.reminder.unit = "minutes";
          body.reminder.types = ["email"];

          instance.crmTasksIdPatch(id, body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Task);
            expect(data.firstContact).to.be.a(SibApiV3Sdk.Contact);
                  expect(data.firstContact.virtualNextTask).to.be.a(Object);
              expect(data.firstContact.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
              expect(data.firstContact.email).to.be.a('string');
              expect(data.firstContact.email).to.be("contact@example.com");
              expect(data.firstContact.assignToId).to.be.a('string');
              expect(data.firstContact.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
              expect(data.firstContact.contactsId).to.be.a('number');
              expect(data.firstContact.contactsId).to.be(247);
              expect(data.firstContact.crmLists).to.be.a(Object);
              expect(data.firstContact.crmLists).to.be([43,58]);
              expect(data.firstContact.attributes).to.be.a(Object);
              expect(data.firstContact.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
              expect(data.firstContact.createdAt).to.be.a(Date);
              expect(data.firstContact.createdAt).to.be(2017-05-01T17:05:03.000Z);
              expect(data.firstContact.updatedAt).to.be.a(Date);
              expect(data.firstContact.updatedAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");
            expect(data.taskTypeId).to.be.a('string');
            expect(data.taskTypeId).to.be("61a5cd07ca1347c82306ad09");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Task: Connect with client");
            {
              let dataCtr = data.contactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.contacts;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SibApiV3Sdk.Contact);
                expect(data.virtualNextTask).to.be.a(Object);
                expect(data.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("contact@example.com");
                expect(data.assignToId).to.be.a('string');
                expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
                expect(data.contactsId).to.be.a('number');
                expect(data.contactsId).to.be(247);
                expect(data.crmLists).to.be.a(Object);
                expect(data.crmLists).to.be([43,58]);
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

                      }
            }
            {
              let dataCtr = data.dealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.companiesIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.assignToId).to.be.a('string');
            expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
            expect(data._date).to.be.a(Date);
            expect(data._date).to.be(2021-11-01T17:44:54.668Z);
            expect(data.duration).to.be.a('number');
            expect(data.duration).to.be(900000);
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("In communication with client for resolution of queries.");
            expect(data.done).to.be.a('boolean');
            expect(data.done).to.be(false);
            expect(data.reminder).to.be.a(SibApiV3Sdk.TaskReminder);
                  expect(data.reminder.value).to.be.a('number');
              expect(data.reminder.value).to.be(10);
              expect(data.reminder.unit).to.be.a('string');
              expect(data.reminder.unit).to.be("minutes");
              {
                let dataCtr = data.reminder.types;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.refs).to.be.a(Object);
            expect(data.refs).to.be({"dealsIds":[{"id":"61a5ce58c5d4795761045990","attributes":{"deal_name":"Deal Example","deal_owner":"5faab4b7f195bb3c4c31e62a","pipeline":"61122683f86562145185b489","deal_stage":"3d696d83-c75b-404d-b062-680186b8bbb","stage_updated_at":"2017-11-22T09:23:44.213Z","created_at":"2017-09-24T12:33:24.657Z","number_of_contacts":1,"last_updated_date":"2019-11-22T09:23:44.246Z","last_activity_date":"2017-09-30T06:44:15.765Z","number_of_activities":1,"close_date":"2019-11-21T18:30:00.000Z","actual_close_date":"2019-11-22T09:23:44.213Z","total_revenue":0},"linkedContactsIds":[247],"linkedCompaniesIds":[]}]});

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasksPost', function() {
        it('should call crmTasksPost successfully', function(done) {
          // TODO: uncomment, update parameter values for crmTasksPost call and complete the assertions
          /*
          var body = new SibApiV3Sdk.Body();
          body.name = "Task: Connect with client";
          body.duration = 900000;
          body.taskTypeId = "61a5cd07ca1347c82306ad09";
          body._date = 2021-11-01T17:44:54.668Z;
          body.notes = "In communication with client for resolution of queries.";
          body.done = false;
          body.assignToId = "5faab4b7f195bb3c4c31e62a";
          body.contactsIds = [1,2,3];
          body.dealsIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.companiesIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.reminder = new SibApiV3Sdk.TaskReminder();
          body.reminder.value = 10;
          body.reminder.unit = "minutes";
          body.reminder.types = ["email"];

          instance.crmTasksPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Task);
            expect(data.firstContact).to.be.a(SibApiV3Sdk.Contact);
                  expect(data.firstContact.virtualNextTask).to.be.a(Object);
              expect(data.firstContact.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
              expect(data.firstContact.email).to.be.a('string');
              expect(data.firstContact.email).to.be("contact@example.com");
              expect(data.firstContact.assignToId).to.be.a('string');
              expect(data.firstContact.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
              expect(data.firstContact.contactsId).to.be.a('number');
              expect(data.firstContact.contactsId).to.be(247);
              expect(data.firstContact.crmLists).to.be.a(Object);
              expect(data.firstContact.crmLists).to.be([43,58]);
              expect(data.firstContact.attributes).to.be.a(Object);
              expect(data.firstContact.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
              expect(data.firstContact.createdAt).to.be.a(Date);
              expect(data.firstContact.createdAt).to.be(2017-05-01T17:05:03.000Z);
              expect(data.firstContact.updatedAt).to.be.a(Date);
              expect(data.firstContact.updatedAt).to.be(2017-05-01T17:05:03.000Z);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");
            expect(data.taskTypeId).to.be.a('string');
            expect(data.taskTypeId).to.be("61a5cd07ca1347c82306ad09");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Task: Connect with client");
            {
              let dataCtr = data.contactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.contacts;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SibApiV3Sdk.Contact);
                expect(data.virtualNextTask).to.be.a(Object);
                expect(data.virtualNextTask).to.be({"id":"618e030658282f0555259086","date":"2021-11-12T06:30:00+00:00","done":false});
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("contact@example.com");
                expect(data.assignToId).to.be.a('string');
                expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
                expect(data.contactsId).to.be.a('number');
                expect(data.contactsId).to.be(247);
                expect(data.crmLists).to.be.a(Object);
                expect(data.crmLists).to.be([43,58]);
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be({"SMS":"33058407250","IDENTIFICATION":"1-3RHQ-259","CIV":"MS","LAST_NAME":"Brennon","FIRST_NAME":"Meg","DOB":"1986-05-02T00:00:00.000Z","ADDRESS":"1 5th avenue","ZIP_CODE":"44300","CITY":"New-York","ACTION_CODE":"17HH98CH"});
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2017-05-01T17:05:03.000Z);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2017-05-01T17:05:03.000Z);

                      }
            }
            {
              let dataCtr = data.dealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.companiesIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.assignToId).to.be.a('string');
            expect(data.assignToId).to.be("5faab4b7f195bb3c4c31e62a");
            expect(data._date).to.be.a(Date);
            expect(data._date).to.be(2021-11-01T17:44:54.668Z);
            expect(data.duration).to.be.a('number');
            expect(data.duration).to.be(900000);
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("In communication with client for resolution of queries.");
            expect(data.done).to.be.a('boolean');
            expect(data.done).to.be(false);
            expect(data.reminder).to.be.a(SibApiV3Sdk.TaskReminder);
                  expect(data.reminder.value).to.be.a('number');
              expect(data.reminder.value).to.be(10);
              expect(data.reminder.unit).to.be.a('string');
              expect(data.reminder.unit).to.be("minutes");
              {
                let dataCtr = data.reminder.types;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(2021-11-01T17:44:54.668Z);
            expect(data.refs).to.be.a(Object);
            expect(data.refs).to.be({"dealsIds":[{"id":"61a5ce58c5d4795761045990","attributes":{"deal_name":"Deal Example","deal_owner":"5faab4b7f195bb3c4c31e62a","pipeline":"61122683f86562145185b489","deal_stage":"3d696d83-c75b-404d-b062-680186b8bbb","stage_updated_at":"2017-11-22T09:23:44.213Z","created_at":"2017-09-24T12:33:24.657Z","number_of_contacts":1,"last_updated_date":"2019-11-22T09:23:44.246Z","last_activity_date":"2017-09-30T06:44:15.765Z","number_of_activities":1,"close_date":"2019-11-21T18:30:00.000Z","actual_close_date":"2019-11-22T09:23:44.213Z","total_revenue":0},"linkedContactsIds":[247],"linkedCompaniesIds":[]}]});

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('crmTasktypesGet', function() {
        it('should call crmTasktypesGet successfully', function(done) {
          // TODO: uncomment crmTasktypesGet call and complete the assertions
          /*

          instance.crmTasktypesGet().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.TaskTypes);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a88a2eb7a574180261234");
            expect(data.icon).to.be.a('string');
            expect(data.icon).to.be("PaperPlaneIcon");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("Email");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
