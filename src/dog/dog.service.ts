import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "Waw waw";
    }

    public introduce(): string {
        return "My name is Alabay";
    }
}
