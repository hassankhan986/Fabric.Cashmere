import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeformSurveyComponent } from './typeform-survey.component';
import { TypeformSurveyModule } from './typeform-survey.module';

describe('TypeformSurveyComponent', () => {
    let component: TypeformSurveyComponent;
    let fixture: ComponentFixture<TypeformSurveyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TypeformSurveyModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeformSurveyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('open', () => {
        it('should throw Error when no SurveyUri is supplied', () => {
            expect(function () {
                component.open();
            }).toThrow(new Error('SurveyUri must be specified on element hc-typeform-survey'));
        });
        it('should not throw error when opened', () => {
            expect(function () {
                component.surveyUri = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere';
                component.appVersion = '1.0';
                component.open();
            }).not.toThrow(new Error("Cannot read property 'includes' of undefined"));
        });
    });

    describe('refreshFullUri', () => {
        it('should return full url', () => {
            const expected = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere&app_version=1.0';
            component.surveyUri = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere';
            component.appVersion = '1.0';
            expect(component._fullUri).toBe(expected);
        });
        it('should throw error for when no surveyUri is supplied', () => {
            expect(function () {
                component.appVersion = '1.0';
            }).toThrow(new Error("Cannot read property 'includes' of undefined"));
        });
    });
});
