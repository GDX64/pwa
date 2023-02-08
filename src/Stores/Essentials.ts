import { inject } from 'vue';
import { AppEssentials } from '../Interfaces/AppEssentials';

export function useAppEssentials() {
    return inject<AppEssentials>('appEssentials')!;
}
