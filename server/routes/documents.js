var express = require('express');
var router = express.Router();

var sequenceGenerator = require('./sequenceGenerator');
var Document = require('../model/document');

router.get('/', function (req, res, next) {
  Document.find()
    .exec(function (err, documents) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: documents
      });
    });
});

router.post('/', function (req, res, next) {
  var maxDocumentId = sequenceGenerator.nextId("documents");

  var document = new Document({
    id: maxDocumentId,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });

  document.save(function (err, result) {
    res.setHeader('Content-Type', 'application/json');
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }

    res.status(201).json({
      message: 'Saved message',
      obj: result
    });
  });
});

router.patch('/:id', function (req, res, next) {
  Document.findOne({'id': req.params.id}, 'id name description url', function (err, document) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!document) {
      return res.status(500).json({
        title: 'No Message Found!',
        error: {message: 'Message not found'}
      });
    }
    document.name = req.body.name;
    document.description = req.body.description;
    document.url = req.body.url;
    document.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated message',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Document.findOne({ 'id': req.params.id }, 'id name description url', function (err, document) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!document) {
      return res.status(500).json({
        title: 'No Message Found!',
        error: {message: 'Message not found'}
      });
    }
    document.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted message',
        obj: result
      });
    });
  });
});

module.exports = router;
