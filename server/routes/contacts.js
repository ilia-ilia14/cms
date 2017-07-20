var express = require('express');
var router = express.Router();

var sequenceGenerator = require('./sequenceGenerator');
var Contact = require('../model/contact');

router.get('/', function (req, res, next) {
  Contact.find()
    .populate('group')
    .exec(function (err, contacts) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: contacts
      });
    });
});

router.post('/', function (req, res, next) {
  var maxContactId = sequenceGenerator.nextId("contacts");

  var contacts = req.body.group;
  var contactIds = [];
  for (var i = 0; i < contacts.length; i++) {
    contactIds.push(contacts[i]._id);
  }

  var contact = new Contact({
    id: maxContactId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    imageUrl: req.body.imageUrl,
    group: contactIds
  });

  contact.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: result
    });
  });
});

router.patch('/:id', function (req, res, next) {
  Contact.findOne({'id': req.params.id}, 'id name email phone imageUrl group', function (err, contact) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!contact) {
      return res.status(500).json({
        title: 'No Contact Found!',
        error: {contact: 'Contact not found'}
      });
    }

    var contacts = req.body.group;
    var contactIds = [];
    for (var i = 0; i < contacts.length; i++) {
      contactIds.push(contacts[i]._id);
    }

    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.name = req.body.name;
    contact.imageUrl = req.body.imageUrl;
    contact.group = contactIds
    contact.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        contact: 'Updated contact',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Contact.findOne({'id': req.params.id}, 'id name email phone imageUrl group', function (err, contact) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!contact) {
      return res.status(500).json({
        title: 'No Contact Found!',
        error: {message: 'Contact not found'}
      });
    }
    contact.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted contact',
        obj: result
      });
    });
  });
});

module.exports = router;
