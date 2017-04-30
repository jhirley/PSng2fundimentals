import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    })

    describe('ngOnChanges', () => {
        it('should filster the sessions correctly', () => {

        })
    })
});