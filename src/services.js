(function() {
  'use strict';

  angular.module('dataCollectorApp')
    .service('toolService', ['$q', ToolService]);

  /**
   * Tools DataService
   * Uses embedded, hard-coded data model; acts asynchronously.
   *
   * @param $q
   * @constructor
   */
  function ToolService($q) {
    var tools = [
      {
        item: 'Answer Field',
        icon_code: "&#xE8AF;",
        icon_id: 'question_answer',
        href: 'answer-field'
      },
      {
        item: 'Database',
        icon_code: "&#xE87A;",
        icon_id: 'explore',
        href: 'database'
      },
      {
        item: 'Entry Point',
        icon_code: '&#xE886;',
        icon_id: 'group_work',
        href: 'entry-point'
      },
      {
        item: 'Forms',
        icon_code: '&#xE8D2;',
        icon_id: 'subject',
        href: 'forms'
      },
      {
        item: 'Help',
        icon_code: '&#xE887;',
        icon_id: 'help',
        href: 'help'
      },
      {
        item: 'Image',
        icon_code: '&#xE413;',
        icon_id: 'photo_library',
        href: 'image'
      },
      {
        item: 'Lookup',
        icon_code: '&#xE8B6;',
        icon_id: 'search',
        href: 'lookup'
      },
      {
        item: 'Other',
        icon_code: '&#xE8DE;',
        icon_id: 'toc',
        href: 'other'
      },
      {
        item: 'Partner',
        icon_code: '&#xE8D3;',
        icon_id: 'people',
        href: 'partner'
      },
      {
        item: 'Program',
        icon_code: '&#xE862;',
        icon_id: 'assignment_turned_in',
        href: 'program'
      },
      {
        item: 'Question',
        icon_code: '&#xE163;',
        icon_id: 'send',
        href: 'question'
      },
      {
        item: 'Rule',
        icon_code: '&#xE148;',
        icon_id: 'add_circle_outline',
        href: 'rule'
      },
      {
        item: 'RX',
        icon_code: '&#xE8B0;',
        icon_id: 'receipt',
        href: 'rx'
      },
      {
        item: 'Subset',
        icon_code: '&#xE8F9;',
        icon_id: 'work',
        href: 'subset'
      },
      {
        item: 'Text',
        icon_code: '&#xE85D;',
        icon_id: 'assignment',
        href: 'text'
      },
      {
        item: 'Tote',
        icon_code: '&#xE926;',
        icon_id: 'euro_symbol',
        href: 'tote'
      },
      {
        item: 'URL',
        icon_code: '&#xE157;',
        icon_id: 'link',
        href: 'url'
      },
      {
        item: 'User',
        icon_code: '&#xE7FD;',
        icon_id: 'person',
        href: 'user'
      },
      {
        item: 'ZIP',
        icon_code: '&#xE7FD;',
        icon_id: 'location_city',
        href: 'ZIP'
      },
    ];

    return {
      loadAllTools : function() {
        return $q.when(tools);
      }
    }
  }
})();