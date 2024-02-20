export interface State {
    // Définir les propriétés spécifiques de l'état ici
    userStatut: 'connected' | 'disconnected';
    shoppingCart: Cart[];
}

type Cart = {
    id: number;
    quantity: number;
    pricePerUnit: number;
    isAvailable: boolean;
}

type Action = {
    type: string;
    payload?: any;
}

export class Store {
    private state: State;
    private subscribers: ((state: State) => void)[] = [];

    constructor(initialState: State) {
        this.state = initialState;
    }

    getState(): State {
        return this.state;
    }

    dispatch(action: Action): void {
        try {
            // Mettre à jour l'état en fonction de l'action
            switch (action.type) {
                // Gérer différentes actions ici
                default:
                    break;
            }

            // Notifier les abonnés des changements d'état
            this.notifySubscribers();
        } catch (error) {
            // Gérer les erreurs lors de la mise à jour de l'état
            console.error('Une erreur s\'est produite lors de la mise à jour de l\'état:', error);
        }
    }

    private notifySubscribers(): void {
        const newState = this.getState();
        this.subscribers.forEach(subscriber => {
            subscriber(newState);
        });
    }

    subscribe(callback: (state: State) => void): void {
        this.subscribers.push(callback);
    }
}
