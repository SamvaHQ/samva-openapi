import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { nonEmailChannelAt } from "./channel-vocabulary.mjs";

const artifact = (api) => ({
  openapi: "3.1.0",
  info: { title: "Samva API", description: "The email API." },
  paths: {},
  components: { schemas: {} },
  webhooks: {
    "message.received": { post: { description: "Delivered for email, sms, and whatsapp." } },
    "whatsapp.number.connected": { post: {} },
  },
  ...api,
});
const subscription = (values) => ({
  components: { schemas: { CreateWebhookPayload: { properties: { eventTypes: { enum: values } } } } },
});

describe("non-email channel check", () => {
  it("allows channel vocabulary inside the webhooks section", () => {
    assert.equal(nonEmailChannelAt(artifact({})), undefined);
  });

  it("allows a published event type as an exact string value", () => {
    const allowed = artifact(subscription(["message.sent", "whatsapp.number.connected"]));
    assert.equal(nonEmailChannelAt(allowed), undefined);
  });

  it("rejects an event type the webhooks section does not publish", () => {
    const unpublished = artifact(subscription(["whatsapp.number.disconnected"]));
    assert.equal(
      nonEmailChannelAt(unpublished),
      "/components/schemas/CreateWebhookPayload/properties/eventTypes/enum/0",
    );
  });

  it("rejects channel vocabulary in a description", () => {
    const described = artifact({ info: { title: "Samva API", description: "Send WhatsApp." } });
    assert.equal(nonEmailChannelAt(described), "/info/description");
  });

  it("rejects an object key named for a channel, even a published event type", () => {
    const keyed = artifact({
      components: { schemas: { Event: { properties: { "whatsapp.number.connected": {} } } } },
    });
    assert.equal(
      nonEmailChannelAt(keyed),
      "/components/schemas/Event/properties/whatsapp.number.connected",
    );
  });
});
