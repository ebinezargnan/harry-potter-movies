import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
