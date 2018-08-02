import {HeroComponent} from "../hero/hero.component";
import {HeroesComponent} from "./heroes.component";
import {of} from "rxjs/observable/of";
describe('heroes component: ', ()=> {
  let HEROES, mockHeroService, component;
  beforeEach(()=> {
    HEROES = [
      {id:1, name: 'spider dude', strength: 8},
      {id:2, name: 'wonder woman', strength: 5},
      {id:3, name: 'green guy', strength: 3}
    ];
    mockHeroService = jasmine.createSpyObj(['deleteHero']);
    // records information when it has been called.
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete hero: ', ()=> {

    beforeEach(()=> {
      mockHeroService.deleteHero.and.returnValue(of(true));
    });

    it('should remove the selected hero from the heros list:', ()=> {
      //mockHeroService.deleteHero.and.returnValue({subscribe: () => {}});
      // using off is better.
      // one way:  etc.

      // expect(component.heroes[0]).toBe(HEROES[0]);
      // expect(component.heroes[1]).toBe(HEROES[1]);

      // better way:
      //let o = of(3);
      // o.subscribe(data=> {
      //   expect(data).toBe(3);
      // })

      component.heroes = HEROES;
      component.delete(HEROES[2]);
      expect(component.heroes.length).toBe(2);
      expect(component.heroes).not.toContain(HEROES[2]);


    });

    it('should call deleteHero', () => {
      component.heroes = HEROES;
      component.delete(HEROES[2]);
      // with obj with these params at a min.
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
      // if gets called multiple times - check each time...
      // toDo: learn basics - methods on jasmine.
      // there is a not to have been called.
      // to equal, to contain.


      //mockHeroService.deleteHero(HEROES[2]);
    });

  });

});
