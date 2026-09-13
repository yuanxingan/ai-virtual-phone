/**
 * Story-mode presence registry.
 * While the user is inside story mode with a character, proactive chat
 * messages (follow-ups, timed wake, idle reconnect, period care, background
 * replies) for that character are paused — it breaks immersion for them to
 * text you while you are together in the story. Pending schedules stay in
 * place and fire naturally after the story is closed.
 */

const activeCharacterIds = new Set<string>();

export function enterStoryPresence(characterId: string): void {
    if (characterId) activeCharacterIds.add(characterId);
}

export function exitStoryPresence(characterId: string): void {
    activeCharacterIds.delete(characterId);
}

export function isStoryPresenceActive(characterId: string | null | undefined): boolean {
    return !!characterId && activeCharacterIds.has(characterId);
}
