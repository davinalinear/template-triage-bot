const triageConfig = {
  statuses: {
    Acknowledged: {
      emoji: ':eyes:'
    },
    Done: {
      emoji: ':white_check_mark:'
    },
  },
  levels: {
    Urgent: {
      emoji: ':highpriority:'
    },
    Medium: {
      emoji: ':mediumpriority:'
    },
    Low: {
      emoji: ':lowpriority:'
    }
  },
  scheduled_reminders: [
    {
      expression: '0 15 * * *	',
      hours_to_look_back: 72,
      report_on_levels: ['Urgent', 'Medium'], // only report on messages with one of these levels ("OR" logic)
      report_on_does_not_have_status: ['Acknowledged', 'Done'] // only report on messages that do not have either of these statuses ("OR")
    }
  ]
}

// !!! You should not need to edit anything below this comment !!!

// Load our internal triage config helper
const { generateTriageConfigLookups } = require('./helpers/misc')

// Create some calculated arrays/lookups based off of our triageConfig
triageConfig._ = generateTriageConfigLookups(triageConfig)

// Export the config and the generated lookups
module.exports = triageConfig
