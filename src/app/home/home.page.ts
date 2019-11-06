import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RulesService } from '../providers/rules.service';
import { Rules } from '../shared/rules';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private rules: Observable<Rules[]>;
  constructor(private router: Router, private ruleService: RulesService) { }

  ngOnInit() {
    this.rules = this.ruleService.getRules();
  }

  goToGamePage() {
    this.router.navigate(['game']);
  }
}
