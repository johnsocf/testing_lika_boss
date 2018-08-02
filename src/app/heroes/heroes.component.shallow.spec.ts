import {HeroComponent} from "../hero/hero.component";
import {HeroesComponent} from "./heroes.component";
import {of} from "rxjs/observable/of";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HeroService} from "../hero.service";
describe('heroes component shallow: ', ()=> {
  let HEROES, fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'spider dude', strength: 8},
      {id:2, name: 'wonder woman', strength: 5},
      {id:3, name: 'green guy', strength: 3}
    ];
    // build heroservice class, create an instance
    /// pass this back when it's asked for.
    // name: value pair.

    mockHeroService = jasmine.createSpyObj(['getHeroes']);

    // no errors schema.
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [ NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from service', ()=> {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

});
