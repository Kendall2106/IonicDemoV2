import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CompaniesListPage } from './companies-list.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompaniesListPage', () => {
  let component: CompaniesListPage;
  let fixture: ComponentFixture<CompaniesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [CompaniesListPage]
    }).compileComponents();

    fixture = TestBed.createComponent(CompaniesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
