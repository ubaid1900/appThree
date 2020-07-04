import { Component } from '@angular/core';

@Component({
    selector: 'app-test-component',
    template: '<p>This is a test component</p><p>{{title}} from test component</p>'
    styleURLs: []
})
export class TestComponent {
    title: string = 'COMPONENT PRACTICE';
}