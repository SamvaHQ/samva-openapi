const CHANNEL_VOCABULARY = /sms|whatsapp|cpaas/i;

/**
 * The first place outside the `webhooks` section that names a non-email channel, as a JSON
 * pointer, or `undefined` when there is none. The API surface is email-only. Webhook bodies
 * describe every channel Samva signs them for, and an endpoint can subscribe to every published
 * event, so a string value that is exactly a published event type (`whatsapp.number.connected`)
 * is allowed. Object keys are always checked.
 */
export const nonEmailChannelAt = (artifact) => {
  const { webhooks = {}, ...apiSurface } = artifact;
  const eventTypes = new Set(Object.keys(webhooks));
  const visit = (node, pointer) => {
    if (typeof node === "string")
      return !eventTypes.has(node) && CHANNEL_VOCABULARY.test(node) ? pointer : undefined;
    if (node === null || typeof node !== "object") return undefined;
    for (const [key, child] of Object.entries(node)) {
      const at = `${pointer}/${key.replaceAll("~", "~0").replaceAll("/", "~1")}`;
      if (!Array.isArray(node) && CHANNEL_VOCABULARY.test(key)) return at;
      const found = visit(child, at);
      if (found !== undefined) return found;
    }
    return undefined;
  };
  return visit(apiSurface, "");
};
