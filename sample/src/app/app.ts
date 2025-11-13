import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signalStore, withState } from '@ngrx/signals';

type BoringState = {
	boringState: number;
};

const initialState: BoringState = {
	boringState: 1,
};

export const store = signalStore(withState(initialState));

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = store.boringState();
}
