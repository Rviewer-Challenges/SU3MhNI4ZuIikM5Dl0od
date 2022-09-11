from eventlog.apps import EventLogConfig

class CustomEventLogConfig(EventLogConfig):
    def get_event_types(self):
        return {
            'visit': {
                'label': 'Visit',
                'color': 'orange',
                'bgcolor': None,
            }
        }