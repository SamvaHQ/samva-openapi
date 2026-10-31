# Changelog

## v0.52.0

- 377 operations, 277 paths, 547 schemas, 39 webhook events.
- Breaking against v0.51.0.
- Changed schemas:
  - `Organization`


## v0.51.0

- 377 operations, 277 paths, 547 schemas, 39 webhook events.
- Breaking against v0.50.0.
- Changed operations:
  - `POST /v1/campaigns/{id}/runs`


## v0.50.0

- 377 operations, 277 paths, 546 schemas, 39 webhook events.
- Breaking against v0.49.1.
- Changed operations:
  - `POST /v1/campaigns/{id}/runs`
  - `POST /v1/campaigns/{id}/runs/{runId}/resume`


## v0.49.1

- 377 operations, 277 paths, 546 schemas, 39 webhook events.
- Compatible against v0.49.0.


## v0.49.0

- 377 operations, 277 paths, 546 schemas, 39 webhook events.
- Breaking against v0.48.1.
- Changed operations:
  - `PATCH /v1/campaigns/{id}`
  - `PATCH /v1/contact-groups/{id}`
  - `PATCH /v1/contacts/{id}`
  - `PATCH /v1/organizations/current`
  - `POST /v1/campaigns`
  - `POST /v1/contact-groups`
  - `POST /v1/contacts`
  - `POST /v1/contacts/find-or-create`
  - `POST /v1/email/senders`
  - `POST /v1/organizations`
- Changed schemas:
  - `CampaignContentInput`
  - `CreateMailboxEndpointPayload`
  - `CreateMailboxLabelPayload`
  - `CreateMailboxPayload`
  - `EmailRecipient`
  - `EmailSender`
  - `NewsletterCreatePayload`
  - `ScheduledMessage`
  - `SubscribePayload`
  - `TopicCreatePayload`
  - `TopicUpdatePayload`
  - `UpdateMailboxEndpointPayload`
  - `UpdateMailboxLabelPayload`
  - `UpdateMailboxPayload`


## v0.48.1

- 377 operations, 277 paths, 543 schemas, 39 webhook events.
- Compatible against v0.48.0.
- Added operations:
  - `GET /v1/mailboxes/drafts`


## v0.48.0

- 376 operations, 276 paths, 541 schemas, 39 webhook events.
- Breaking against v0.47.1.
- Added operations:
  - `GET /v1/mailboxes/needs-you`
  - `GET /v1/mailboxes/threads`
  - `GET /v1/organizations/personal-mailboxes/address-options`
  - `GET /v1/organizations/personal-mailboxes/assignments`
  - `POST /v1/organizations/members/{userId}/personal-mailbox`
- Changed schemas:
  - `Mailbox`
  - `MailboxSummary`
  - `MailboxThread`
  - `MailboxThreadState`
  - `MailboxThreadSummary`


## v0.47.1

- 371 operations, 271 paths, 535 schemas, 39 webhook events.
- Compatible against v0.47.0.


## v0.47.0

- 371 operations, 271 paths, 535 schemas, 39 webhook events.
- Breaking against v0.46.0.
- Removed operations:
  - `DELETE /v1/topics/{id}/publication/domains/{hostname}`
  - `GET /v1/topics/{id}/issues`
  - `GET /v1/topics/{id}/issues/document`
  - `GET /v1/topics/{id}/issues/head`
  - `GET /v1/topics/{id}/issues/history`
  - `GET /v1/topics/{id}/issues/workspace`
  - `GET /v1/topics/{id}/publication/domains/{hostname}`
  - `PATCH /v1/topics/{id}/issues`
  - `POST /v1/topics/{id}/issues`
  - `POST /v1/topics/{id}/issues/check`
  - `POST /v1/topics/{id}/issues/remove`
  - `POST /v1/topics/{id}/issues/render`
  - `POST /v1/topics/{id}/issues/save`
  - `POST /v1/topics/{id}/publication/domains`
- Added operations:
  - `DELETE /v1/newsletters/{id}`
  - `DELETE /v1/newsletters/{id}/domains/{hostname}`
  - `GET /v1/newsletters`
  - `GET /v1/newsletters/{id}`
  - `GET /v1/newsletters/{id}/domains`
  - `GET /v1/newsletters/{id}/domains/{hostname}`
  - `GET /v1/newsletters/{id}/issues`
  - `GET /v1/newsletters/{id}/issues/document`
  - `GET /v1/newsletters/{id}/issues/head`
  - `GET /v1/newsletters/{id}/issues/history`
  - `GET /v1/newsletters/{id}/issues/workspace`
  - `PATCH /v1/newsletters/{id}`
  - `PATCH /v1/newsletters/{id}/issues`
  - `POST /v1/newsletters`
  - `POST /v1/newsletters/{id}/domains`
  - `POST /v1/newsletters/{id}/issues`
  - `POST /v1/newsletters/{id}/issues/check`
  - `POST /v1/newsletters/{id}/issues/remove`
  - `POST /v1/newsletters/{id}/issues/render`
  - `POST /v1/newsletters/{id}/issues/save`
- Changed schemas:
  - `Topic`
  - `TopicCreatePayload`
  - `TopicIssueCheckPayload`
  - `TopicIssueCreatePayload`
  - `TopicIssueDocument`
  - `TopicIssueList`
  - `TopicIssueListItem`
  - `TopicIssueRemovePayload`
  - `TopicIssueRenderPayload`
  - `TopicIssueSavePayload`
  - `TopicIssueSend`
  - `TopicIssueUpdatePayload`
  - `TopicUpdatePayload`


## v0.46.0

- 365 operations, 269 paths, 529 schemas, 39 webhook events.
- Breaking against v0.45.1.
- Changed operations:
  - `PATCH /v1/templates/{id}/workspace`
  - `POST /v1/campaigns/{id}/runs`
  - `POST /v1/contacts/imports`
  - `POST /v1/messages/scheduled`
  - `POST /v1/templates/{id}/workspace/conflicts`
  - `POST /v1/templates/{id}/workspace/resources`
  - `POST /v1/templates/{id}/workspace/resources/{resourceId}/remove`
  - `POST /v1/templates/{id}/workspace/restore`
  - `POST /v1/templates/{id}/workspace/save`
  - `PUT /v1/templates/{id}/workspace/assets`
- Changed schemas:
  - `CreateEventPayload`
  - `CreateTemplateFromWebsitePayload`
  - `CreateTemplatePayload`


## v0.45.1

- 365 operations, 269 paths, 529 schemas, 39 webhook events.
- Compatible against v0.45.0.


## v0.45.0

- 365 operations, 269 paths, 529 schemas, 39 webhook events.
- Breaking against v0.44.0.
- Changed schemas:
  - `AgentDefinition`
  - `AgentIntegrationReference`
  - `CreateAgentPayload`


## v0.44.0

- 365 operations, 269 paths, 527 schemas, 39 webhook events.
- Breaking against v0.43.0.
- Changed operations:
  - `DELETE /v1/topics/{id}/forms/{formId}`
  - `GET /v1/topics/{id}/forms`
  - `GET /v1/topics/{id}/forms/{formId}`
  - `PATCH /v1/topics/{id}/forms/{formId}`
  - `POST /v1/contacts/imports`
  - `POST /v1/contacts/imports/plan`
  - `POST /v1/topics/{id}/forms`


## v0.43.0

- 365 operations, 269 paths, 527 schemas, 39 webhook events.
- Breaking against v0.42.0.
- Changed operations:
  - `GET /v1/contact-groups`
  - `PATCH /v1/contact-groups/{id}`
  - `PATCH /v1/contacts/{id}`
  - `PATCH /v1/conversations/{id}`
  - `PATCH /v1/custom-fields/{id}`
  - `PATCH /v1/email/blocks/{id}`
  - `PATCH /v1/email/domains/{id}/config`
  - `PATCH /v1/email/forwarding/{id}`
  - `PATCH /v1/organizations/current`
  - `POST /v1/contact-groups`
  - `POST /v1/contacts`
  - `POST /v1/contacts/find-or-create`
  - `POST /v1/conversations`
  - `POST /v1/custom-fields`
  - `POST /v1/email/forwarding`
  - `POST /v1/email/senders`
- Changed schemas:
  - `AddTemplateEntryPayload`
  - `CampaignConversationRef`
  - `CampaignEmailContent`
  - `CampaignEmailInput`
  - `CampaignReplyMailbox`
  - `ContactProfileUpdate`
  - `CreateMailboxLabelPayload`
  - `CreateMailboxNotePayload`
  - `CreateTemplatePayload`
  - `DispatchSendMessagePayload`
  - `EmailBccRecipients`
  - `EmailCcRecipients`
  - `EmailContent`
  - `EmailDispatchContent`
  - `EmailRecipient`
  - `EmailSendMessagePayload`
  - `MailboxMetadata`
  - `MailboxMetadataPatch`
  - `ReplyToAddresses`
  - `SendMessagePayload`
  - `TopicCreatePayload`
  - `TopicFormUpdatePayload`
  - `TopicUpdatePayload`
  - `UpdateMailboxDraftPayload`
  - `UpdateMailboxEndpointPayload`
  - `UpdateMailboxLabelPayload`
  - `UpdateMailboxNotePayload`
  - `UpdateMailboxPolicyPayload`
  - `UpdateMailboxThreadPayload`
  - `UpdateTemplatePayload`
  - `UpdateWebhookPayload`
  - `UpgradeExtensionPayload`
- Changed webhook events:
  - `contact.created`
  - `contact.deleted`
  - `contact.updated`
  - `conversation.archived`
  - `conversation.created`
  - `conversation.updated`


## v0.42.0

- 365 operations, 269 paths, 527 schemas, 39 webhook events.
- Breaking against v0.41.0.
- Added operations:
  - `DELETE /v1/topics/{id}/publication/domains/{hostname}`
  - `GET /v1/topics/{id}/issues`
  - `GET /v1/topics/{id}/issues/document`
  - `GET /v1/topics/{id}/issues/head`
  - `GET /v1/topics/{id}/issues/history`
  - `GET /v1/topics/{id}/issues/workspace`
  - `GET /v1/topics/{id}/publication/domains/{hostname}`
  - `PATCH /v1/topics/{id}/issues`
  - `POST /v1/topics/{id}/issues`
  - `POST /v1/topics/{id}/issues/check`
  - `POST /v1/topics/{id}/issues/remove`
  - `POST /v1/topics/{id}/issues/render`
  - `POST /v1/topics/{id}/issues/save`
  - `POST /v1/topics/{id}/publication/domains`
- Changed operations:
  - `GET /v1/templates/{id}/publications/{publicationId}`
  - `POST /v1/campaigns/preview`
  - `POST /v1/templates/{id}/publications`
  - `POST /v1/templates/{id}/workspace/check`
  - `POST /v1/templates/{id}/workspace/fixtures`
- Changed schemas:
  - `Topic`


## v0.41.0

- 351 operations, 258 paths, 517 schemas, 39 webhook events.
- Breaking against v0.40.0.
- Changed schemas:
  - `AgentApprovalPolicy`
  - `AgentDefinition`
  - `CreateAgentPayload`


## v0.40.0

- 351 operations, 258 paths, 518 schemas, 39 webhook events.
- Breaking against v0.39.0.
- Changed operations:
  - `GET /v1/organizations/usage`


## v0.39.0

- 351 operations, 258 paths, 518 schemas, 39 webhook events.
- Breaking against v0.38.0.
- Changed schemas:
  - `ConversationContacts`


## v0.38.0

- 351 operations, 258 paths, 518 schemas, 39 webhook events.
- Breaking against v0.37.0.


## v0.37.0

- 351 operations, 258 paths, 517 schemas, 39 webhook events.
- Breaking against v0.36.1.


## v0.36.1

- 351 operations, 258 paths, 517 schemas, 39 webhook events.
- Compatible against v0.36.0.


## v0.36.0

- 351 operations, 258 paths, 517 schemas, 39 webhook events.
- Breaking against v0.35.1.
- Removed operations:
  - `DELETE /v1/unsubscribe-groups/{id}`
  - `DELETE /v1/unsubscribe-groups/{id}/members`
  - `GET /v1/unsubscribe-groups`
  - `GET /v1/unsubscribe-groups/check`
  - `GET /v1/unsubscribe-groups/{id}/members`
  - `PATCH /v1/unsubscribe-groups/{id}`
  - `POST /v1/contacts/bulk-import`
  - `POST /v1/unsubscribe-groups`
  - `POST /v1/unsubscribe-groups/{id}/default`
  - `POST /v1/unsubscribe-groups/{id}/members`
- Added operations:
  - `DELETE /v1/topics/{id}`
  - `DELETE /v1/topics/{id}/forms/{formId}`
  - `GET /v1/campaigns/{id}/runs/{runId}/report`
  - `GET /v1/contacts/imports/{id}`
  - `GET /v1/topics`
  - `GET /v1/topics/check`
  - `GET /v1/topics/{id}`
  - `GET /v1/topics/{id}/forms`
  - `GET /v1/topics/{id}/forms/{formId}`
  - `GET /v1/topics/{id}/subscriptions`
  - `PATCH /v1/topics/{id}`
  - `PATCH /v1/topics/{id}/forms/{formId}`
  - `POST /v1/campaigns/preview`
  - `POST /v1/campaigns/test-send`
  - `POST /v1/contacts/imports`
  - `POST /v1/contacts/imports/plan`
  - `POST /v1/topics`
  - `POST /v1/topics/{id}/default`
  - `POST /v1/topics/{id}/forms`
  - `POST /v1/topics/{id}/subscriptions`
- Changed schemas:
  - `CampaignAudience`
  - `CampaignContent`
  - `CampaignContentInput`
  - `CampaignPolicy`
  - `Contact`
  - `EmailContent`
  - `EmailDispatchContent`
  - `SkippedRecipient`
  - `SubscribePayload`
  - `UnsubscribeGroupList`
  - `UnsubscribeGroupMemberByContact`
  - `UnsubscribeGroupMemberByEmail`
  - `UnsubscribeGroupMemberByPhone`
  - `UnsubscribeGroupMemberId`
  - `UnsubscribeGroupMemberPage`
  - `UnsubscribeGroupMemberRef`
  - `UnsubscribeId`
- Changed webhook events:
  - `contact.resubscribed`
  - `contact.subscribed`
  - `contact.unsubscribed`


## v0.35.1

- 341 operations, 251 paths, 495 schemas, 39 webhook events.
- Compatible against v0.35.0.


## v0.35.0

- 341 operations, 251 paths, 494 schemas, 39 webhook events.
- Breaking against v0.34.0.


## v0.34.0

- 341 operations, 251 paths, 494 schemas, 39 webhook events.
- Breaking against v0.33.0.
- Added operations:
  - `DELETE /v1/agents/{id}`
  - `GET /v1/agents`
  - `GET /v1/agents/{id}`
  - `GET /v1/agents/{id}/versions`
  - `GET /v1/agents/{id}/versions/{version}`
  - `PATCH /v1/agents/{id}`
  - `POST /v1/agents`
  - `POST /v1/agents/{id}/publish`
  - `PUT /v1/agents/{id}/draft`
- Changed schemas:
  - `MailboxNonSendAction`
- Added webhook events:
  - `mailbox.message.delivered`
  - `mailbox.message.failed`
  - `mailbox.message.read`
- Changed webhook events:
  - `mailbox.action.pending_approval`


## v0.33.0

- 332 operations, 245 paths, 469 schemas, 36 webhook events.
- Breaking against v0.32.1.
- Changed schemas:
  - `CustomTrackingStatus`


## v0.32.1

- 332 operations, 245 paths, 469 schemas, 36 webhook events.
- Compatible against v0.32.0.


## v0.32.0

- 332 operations, 245 paths, 469 schemas, 36 webhook events.
- Breaking against v0.31.0.
- Changed schemas:
  - `Template`


## v0.31.0

- 332 operations, 245 paths, 468 schemas, 36 webhook events.
- Breaking against v0.30.0.


## v0.30.0

- 332 operations, 245 paths, 467 schemas, 36 webhook events.
- Breaking against v0.29.0.


## v0.29.0

- 332 operations, 245 paths, 467 schemas, 36 webhook events.
- Breaking against v0.28.0.
- Added operations:
  - `POST /v1/organizations/current/avatar-upload`
- Changed schemas:
  - `Organization`


## v0.28.0

- 331 operations, 244 paths, 467 schemas, 36 webhook events.
- Breaking against v0.27.0.


## v0.27.0

- 331 operations, 244 paths, 467 schemas, 36 webhook events.
- Breaking against v0.26.0.
- Changed schemas:
  - `BrandFooterBlock`
  - `BrandRenderedFooter`


## v0.26.0

- 331 operations, 244 paths, 468 schemas, 36 webhook events.
- Breaking against v0.25.0.


## v0.25.0

- 331 operations, 244 paths, 468 schemas, 36 webhook events.
- Breaking against v0.24.4.
- Changed schemas:
  - `AttachmentList`
  - `BatchEventsResult`
  - `BlockPage`
  - `BulkUpdateResult`
  - `ContactGroupPage`
  - `Conversation`
  - `ConversationSummary`
  - `CustomFieldList`
  - `DeliverabilityFacts`
  - `EmailDomainDetailed`
  - `EmailDomainProvisioningExecution`
  - `EmailDomainVerification`
  - `ExtensionBundle`
  - `ExtensionRun`
  - `ExtensionRunSummary`
  - `ForwardingRuleList`
  - `IdentityClearanceStatus`
  - `Journey`
  - `JourneyListItem`
  - `JourneyNodeStats`
  - `JourneyRun`
  - `JourneyRunCounts`
  - `JourneyRunDetail`
  - `JourneyStats`
  - `JourneyVersion`
  - `MailboxAgentActivity`
  - `MailboxFolderCount`
  - `MailboxMessage`
  - `MailboxSendSnapshot`
  - `MailboxThread`
  - `MailboxThreadSummary`
  - `OnboardingReviewStatus`
  - `ReapplyOnboardingReviewInput`
  - `ReceivingStatus`
  - `RespondToOnboardingInformationRequestInput`
  - `SendsSeries`
  - `SuppressionCounts`
  - `Template`
  - `TemplateInputContractPage`
  - `TemplateSummary`
  - `UnsubscribeGroupList`
  - `ValidateEmailResponse`
  - `WebhookDailyDeliveries`
  - `WebhookDeliveryCounts`
  - `WebhookDeliveryPage`
  - `WebhookStatsResponse`
- Changed webhook events:
  - `domain.updated`
  - `flow.registration.updated`
  - `journey.webhook`


## v0.24.4

- 331 operations, 244 paths, 468 schemas, 36 webhook events.
- Compatible against v0.24.3.


## v0.24.3

- 331 operations, 244 paths, 468 schemas, 36 webhook events.
- Compatible against v0.24.2.
- Added webhook events:
  - `flow.registration.updated`
  - `message.read`
  - `template.registration.updated`
  - `whatsapp.number.connected`


## v0.24.2

- 331 operations, 244 paths, 468 schemas, 32 webhook events.
- Compatible against v0.24.1.


## v0.24.1

- 331 operations, 244 paths, 468 schemas, 32 webhook events.
- Compatible against v0.24.0.
- Added operations:
  - `POST /v1/templates/from-website`


## v0.24.0

- 330 operations, 243 paths, 466 schemas, 32 webhook events.
- Breaking against v0.23.0.
- Removed operations:
  - `POST /v1/webhooks/{id}/secret/reveal`
- Changed schemas:
  - `WebhookSecretHint`


## v0.23.0

- 331 operations, 244 paths, 466 schemas, 32 webhook events.
- Breaking against v0.22.0.
- Added operations:
  - `GET /v1/webhooks/{id}/secret`
  - `POST /v1/webhooks/{id}/secret/reveal`
- Changed schemas:
  - `ApiKey`
  - `ApiKeyWithSecret`


## v0.22.0

- 329 operations, 242 paths, 465 schemas, 32 webhook events.
- Breaking against v0.21.0.
- Changed schemas:
  - `CampaignLatestRun`
  - `CampaignRun`
  - `JourneyRun`
  - `JourneyRunDetail`


## v0.21.0

- 329 operations, 242 paths, 465 schemas, 32 webhook events.
- Breaking against v0.20.2.
- Changed schemas:
  - `Template`
  - `TemplateSummary`


## v0.20.2

- 329 operations, 242 paths, 465 schemas, 32 webhook events.
- Compatible against v0.20.1.


## v0.20.1

- 329 operations, 242 paths, 465 schemas, 32 webhook events.
- Compatible against v0.20.0.
- Added webhook events:
  - `contact.consent_changed`
  - `contact.created`
  - `contact.deleted`
  - `contact.resubscribed`
  - `contact.subscribed`
  - `contact.unsubscribed`
  - `contact.updated`
  - `conversation.archived`
  - `conversation.created`
  - `conversation.updated`
  - `domain.updated`
  - `domain.warming.updated`
  - `journey.webhook`
  - `mailbox.action.pending_approval`
  - `mailbox.action.resolved`
  - `mailbox.message.discarded`
  - `mailbox.message.quarantined`
  - `mailbox.message.received`
  - `mailbox.message.released`
  - `mailbox.message.sent`
  - `message.bounced`
  - `message.clicked`
  - `message.complained`
  - `message.delivered`
  - `message.failed`
  - `message.opened`
  - `message.received`
  - `message.sent`
  - `webhook.created`
  - `webhook.deleted`
  - `webhook.test`
  - `webhook.updated`


## v0.20.0

- The OpenAPI document Samva SDK `samva@0.20.0` was generated from: 329 operations, 242 paths, 465 schemas.
- Breaking against v0.19.0.
- Added operations:
  - `DELETE /v1/namespaces/{id}/resources/{type}/{resourceId}`
  - `GET /v1/namespaces/{id}/usage`
  - `POST /v1/namespaces/{id}/resources`
- Changed schemas:
  - `ApiKeyAccess`
  - `CampaignRecipientPage`
  - `CampaignRun`
  - `Contact`
  - `ContactSummary`
  - `EmailDomainDetailed`
  - `EmailDomainPage`
  - `EmailSenderPage`
  - `MailboxChannelUnsupportedError`
  - `Template`
  - `TemplateSummary`


## v0.19.0

- The OpenAPI document Samva SDK `samva@0.19.0` was generated from: 326 operations, 239 paths, 461 schemas.
- Breaking against v0.18.0.
- Added operations:
  - `PUT /v1/contacts/{id}/identities/{identityId}/consent/{channel}`
- Changed schemas:
  - `ContactIdentity`
  - `ContactIdentityInput`
  - `ConversationContact`
  - `MailboxNonSendAction`
  - `MailboxSendAction`
  - `MessageDelivery`
  - `Organization`
  - `UnsubscribeGroupMemberPage`
  - `UpdateWebhookPayload`
  - `UpgradeExtensionPayload`


## v0.18.0

- The OpenAPI document Samva SDK `samva@0.18.0` was generated from: 325 operations, 238 paths, 450 schemas.
- Breaking against 2026-08-31.1.
- Removed operations:
  - `DELETE /v1/api-keys/{id}`
  - `DELETE /v1/api-keys/{id}/remove`
  - `DELETE /v1/campaigns/{id}`
  - `DELETE /v1/email/domains/{id}/default-sender`
  - `DELETE /v1/email/domains/{id}/provisioning/connections/{connectionId}`
  - `DELETE /v1/media/{mediaId}`
  - `DELETE /v1/templates/families/{familyId}`
  - `DELETE /v1/templates/families/{familyId}/members/{templateId}`
  - `GET /v1/design`
  - `GET /v1/email/domains/{id}/provisioning`
  - `GET /v1/media/{mediaId}`
  - `GET /v1/media/{mediaId}/url`
  - `GET /v1/operations/{operationId}`
  - `GET /v1/template-documents/{templateId}`
  - `GET /v1/template-documents/{templateId}/versions`
  - `GET /v1/templates/dashboard`
  - `GET /v1/templates/families/{familyId}`
  - `GET /v1/webhooks/{webhookId}/logs`
  - `GET /v1/webhooks/{webhookId}/stats`
  - `PATCH /v1/templates/families/{familyId}`
  - `POST /v1/email/catch-all/disable`
  - `POST /v1/email/catch-all/enable`
  - `POST /v1/email/domains/{id}/provisioning/authorizations`
  - `POST /v1/email/domains/{id}/provisioning/cleanup-plans`
  - `POST /v1/email/domains/{id}/provisioning/cleanup-plans/{attemptId}/apply`
  - `POST /v1/email/domains/{id}/provisioning/cleanup-plans/{attemptId}/authorize`
  - `POST /v1/email/domains/{id}/provisioning/connections`
  - `POST /v1/email/domains/{id}/provisioning/connections/existing`
  - `POST /v1/email/domains/{id}/provisioning/plans`
  - `POST /v1/email/domains/{id}/provisioning/plans/{attemptId}/apply`
  - `POST /v1/email/domains/{id}/provisioning/plans/{attemptId}/authorize`
  - `POST /v1/email/domains/{id}/receiving`
  - `POST /v1/email/domains/{id}/verification`
  - `POST /v1/email/provisioning/authorizations/complete`
  - `POST /v1/media/{mediaId}/complete`
  - `POST /v1/operations/{operationId}/retry`
  - `POST /v1/organizations/bootstrap`
  - `POST /v1/template-documents/bootstrap`
  - `POST /v1/template-documents/{templateId}/agent-admission`
  - `POST /v1/template-documents/{templateId}/agent-conversation/clear-completion`
  - `POST /v1/template-documents/{templateId}/agent-proposals/apply`
  - `POST /v1/template-documents/{templateId}/publish`
  - `POST /v1/template-documents/{templateId}/render`
  - `POST /v1/template-documents/{templateId}/save`
  - `POST /v1/template-documents/{templateId}/send`
  - `POST /v1/template-documents/{templateId}/send-test`
  - `POST /v1/template-documents/{templateId}/source`
  - `POST /v1/template-documents/{templateId}/spam-check`
  - `POST /v1/template-documents/{templateId}/unpublish`
  - `POST /v1/template-documents/{templateId}/versions/{versionId}/restore`
  - `POST /v1/templates/families/{familyId}/channels/{channel}`
  - `POST /v1/templates/families/{familyId}/members/{templateId}`
  - `POST /v1/templates/{id}/approve`
  - `POST /v1/webhooks/{webhookId}/deliveries/{deliveryId}/redeliver`
  - `POST /v1/webhooks/{webhookId}/rotate-secret`
  - `PUT /v1/design`
  - `PUT /v1/email/domains/{id}/default-sender`
- Added operations:
  - `DELETE /v1/attachments/{id}`
  - `DELETE /v1/brands/{slug}`
  - `DELETE /v1/contact-groups/{id}`
  - `DELETE /v1/contact-groups/{id}/members`
  - `DELETE /v1/contacts/{id}/identities/{identityId}`
  - `DELETE /v1/contacts/{id}/tags`
  - `DELETE /v1/conversations/{id}/categories`
  - `DELETE /v1/conversations/{id}/channels`
  - `DELETE /v1/conversations/{id}/tags`
  - `DELETE /v1/custom-fields/{id}`
  - `DELETE /v1/email/domains/{id}/warming/batches/{batchId}`
  - `DELETE /v1/extension-installations/{id}`
  - `DELETE /v1/journeys/{id}`
  - `DELETE /v1/mailboxes/{id}`
  - `DELETE /v1/mailboxes/{id}/drafts/{draftId}`
  - `DELETE /v1/mailboxes/{id}/endpoints/{endpointId}`
  - `DELETE /v1/mailboxes/{id}/grants/{grantId}`
  - `DELETE /v1/mailboxes/{id}/labels/{labelId}`
  - `DELETE /v1/mailboxes/{id}/policies/{policyId}`
  - `DELETE /v1/mailboxes/{id}/threads/{threadId}/labels`
  - `DELETE /v1/mailboxes/{id}/threads/{threadId}/notes/{noteId}`
  - `DELETE /v1/media/{id}`
  - `DELETE /v1/namespaces/{id}`
  - `DELETE /v1/templates/families/{id}`
  - `DELETE /v1/templates/families/{id}/members/{templateId}`
  - `DELETE /v1/unsubscribe-groups/{id}`
  - `DELETE /v1/unsubscribe-groups/{id}/members`
  - `GET /v1/analytics/channel-stats`
  - `GET /v1/analytics/delivery-metrics`
  - `GET /v1/analytics/hourly-distribution`
  - `GET /v1/analytics/stats`
  - `GET /v1/analytics/top-contacts`
  - `GET /v1/attachments`
  - `GET /v1/attachments/{id}`
  - `GET /v1/attachments/{id}/download-url`
  - `GET /v1/brands`
  - `GET /v1/brands/{slug}`
  - `GET /v1/contact-groups`
  - `GET /v1/contact-groups/{id}`
  - `GET /v1/contact-groups/{id}/members`
  - `GET /v1/contacts/{id}/events`
  - `GET /v1/custom-fields`
  - `GET /v1/email/domains/{id}/receiving-status`
  - `GET /v1/email/domains/{id}/warming`
  - `GET /v1/email/onboarding-review`
  - `GET /v1/email/senders/{id}`
  - `GET /v1/email/suppressions/counts`
  - `GET /v1/extension-installations`
  - `GET /v1/extension-installations/{id}`
  - `GET /v1/extension-installations/{id}/runs`
  - `GET /v1/extension-installations/{id}/runs/{runId}`
  - `GET /v1/extensions`
  - `GET /v1/extensions/{id}`
  - `GET /v1/extensions/{id}/versions`
  - `GET /v1/extensions/{id}/versions/{versionId}`
  - `GET /v1/journeys`
  - `GET /v1/journeys/{id}`
  - `GET /v1/journeys/{id}/runs`
  - `GET /v1/journeys/{id}/runs/{runId}`
  - `GET /v1/journeys/{id}/stats`
  - `GET /v1/journeys/{id}/versions/{version}`
  - `GET /v1/mailboxes`
  - `GET /v1/mailboxes/{id}`
  - `GET /v1/mailboxes/{id}/actions`
  - `GET /v1/mailboxes/{id}/actions/{actionId}`
  - `GET /v1/mailboxes/{id}/agent-activity`
  - `GET /v1/mailboxes/{id}/drafts`
  - `GET /v1/mailboxes/{id}/drafts/{draftId}`
  - `GET /v1/mailboxes/{id}/events`
  - `GET /v1/mailboxes/{id}/folders`
  - `GET /v1/mailboxes/{id}/grants`
  - `GET /v1/mailboxes/{id}/labels`
  - `GET /v1/mailboxes/{id}/messages/{messageId}`
  - `GET /v1/mailboxes/{id}/messages/{messageId}/attachments/{attachmentId}`
  - `GET /v1/mailboxes/{id}/messages/{messageId}/raw`
  - `GET /v1/mailboxes/{id}/policies`
  - `GET /v1/mailboxes/{id}/policies/{policyId}`
  - `GET /v1/mailboxes/{id}/quarantine`
  - `GET /v1/mailboxes/{id}/threads`
  - `GET /v1/mailboxes/{id}/threads/{threadId}`
  - `GET /v1/mailboxes/{id}/threads/{threadId}/content`
  - `GET /v1/mailboxes/{id}/threads/{threadId}/messages`
  - `GET /v1/mailboxes/{id}/threads/{threadId}/notes`
  - `GET /v1/media/{id}`
  - `GET /v1/media/{id}/url`
  - `GET /v1/messages/{id}/content`
  - `GET /v1/messages/{id}/deliveries`
  - `GET /v1/namespaces`
  - `GET /v1/namespaces/{id}`
  - `GET /v1/operations/{id}`
  - `GET /v1/organizations/current/profile`
  - `GET /v1/organizations/trust-tier`
  - `GET /v1/templates/families/{id}`
  - `GET /v1/templates/{id}/input-contracts`
  - `GET /v1/templates/{id}/input-contracts/{inputContractId}`
  - `GET /v1/templates/{id}/publications/{publicationId}`
  - `GET /v1/templates/{id}/repository`
  - `GET /v1/templates/{id}/workspace/history`
  - `GET /v1/unsubscribe-groups`
  - `GET /v1/unsubscribe-groups/check`
  - `GET /v1/unsubscribe-groups/{id}/members`
  - `GET /v1/webhooks/{id}/logs`
  - `GET /v1/webhooks/{id}/stats`
  - `GET /v1/whoami`
  - `PATCH /v1/brands/{slug}`
  - `PATCH /v1/contact-groups/{id}`
  - `PATCH /v1/custom-fields/{id}`
  - `PATCH /v1/email/domains/{id}/warming/policy`
  - `PATCH /v1/journeys/{id}`
  - `PATCH /v1/mailboxes/{id}`
  - `PATCH /v1/mailboxes/{id}/drafts/{draftId}`
  - `PATCH /v1/mailboxes/{id}/endpoints/{endpointId}`
  - `PATCH /v1/mailboxes/{id}/grants/{grantId}`
  - `PATCH /v1/mailboxes/{id}/labels/{labelId}`
  - `PATCH /v1/mailboxes/{id}/policies/{policyId}`
  - `PATCH /v1/mailboxes/{id}/threads/{threadId}`
  - `PATCH /v1/mailboxes/{id}/threads/{threadId}/notes/{noteId}`
  - `PATCH /v1/namespaces/{id}`
  - `PATCH /v1/templates/families/{id}`
  - `PATCH /v1/templates/{id}/workspace`
  - `PATCH /v1/unsubscribe-groups/{id}`
  - `POST /v1/analytics/export`
  - `POST /v1/api-keys/{id}/revoke`
  - `POST /v1/brands`
  - `POST /v1/brands/{slug}/default`
  - `POST /v1/campaigns/{id}/archive`
  - `POST /v1/contact-groups`
  - `POST /v1/contact-groups/preview`
  - `POST /v1/contact-groups/{id}/evaluate`
  - `POST /v1/contact-groups/{id}/members`
  - `POST /v1/contacts/{id}/identities`
  - `POST /v1/contacts/{id}/tags`
  - `POST /v1/conversations/{id}/categories`
  - `POST /v1/conversations/{id}/channels`
  - `POST /v1/conversations/{id}/tags`
  - `POST /v1/custom-fields`
  - `POST /v1/email/domains/{id}/custom-tracking/recheck`
  - `POST /v1/email/domains/{id}/disable-catch-all`
  - `POST /v1/email/domains/{id}/enable-catch-all`
  - `POST /v1/email/domains/{id}/enable-receiving`
  - `POST /v1/email/domains/{id}/rotate-dkim`
  - `POST /v1/email/domains/{id}/verify`
  - `POST /v1/email/domains/{id}/warming`
  - `POST /v1/email/domains/{id}/warming/complete`
  - `POST /v1/email/domains/{id}/warming/pause`
  - `POST /v1/email/domains/{id}/warming/resume`
  - `POST /v1/email/onboarding-review/reapply`
  - `POST /v1/email/onboarding-review/respond`
  - `POST /v1/events`
  - `POST /v1/events/batch`
  - `POST /v1/extension-installations`
  - `POST /v1/extension-installations/{id}/disable`
  - `POST /v1/extension-installations/{id}/enable`
  - `POST /v1/extension-installations/{id}/upgrade`
  - `POST /v1/extensions`
  - `POST /v1/feedback`
  - `POST /v1/journeys`
  - `POST /v1/journeys/{id}/archive`
  - `POST /v1/journeys/{id}/pause`
  - `POST /v1/journeys/{id}/publish`
  - `POST /v1/journeys/{id}/resume`
  - `POST /v1/mailboxes`
  - `POST /v1/mailboxes/{id}/actions/{actionId}/approve`
  - `POST /v1/mailboxes/{id}/actions/{actionId}/cancel`
  - `POST /v1/mailboxes/{id}/actions/{actionId}/deny`
  - `POST /v1/mailboxes/{id}/actions/{actionId}/retry`
  - `POST /v1/mailboxes/{id}/drafts`
  - `POST /v1/mailboxes/{id}/drafts/{draftId}/send`
  - `POST /v1/mailboxes/{id}/endpoints`
  - `POST /v1/mailboxes/{id}/grants`
  - `POST /v1/mailboxes/{id}/labels`
  - `POST /v1/mailboxes/{id}/messages`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/attachments/{attachmentId}/copy`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/discard`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/forward`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/release`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/reply`
  - `POST /v1/mailboxes/{id}/messages/{messageId}/reply-all`
  - `POST /v1/mailboxes/{id}/pause`
  - `POST /v1/mailboxes/{id}/policies`
  - `POST /v1/mailboxes/{id}/resume`
  - `POST /v1/mailboxes/{id}/threads/{threadId}/labels`
  - `POST /v1/mailboxes/{id}/threads/{threadId}/notes`
  - `POST /v1/media/{id}/complete`
  - `POST /v1/messages/scheduled/{id}/resume`
  - `POST /v1/messages/validate/email`
  - `POST /v1/namespaces`
  - `POST /v1/operations/{id}/retry`
  - `POST /v1/subscriptions`
  - `POST /v1/templates/families/{id}/members/{templateId}`
  - `POST /v1/templates/projects/{id}/entries`
  - `POST /v1/templates/{id}/publications`
  - `POST /v1/templates/{id}/publications/{publicationId}/render`
  - `POST /v1/templates/{id}/repository/credentials`
  - `POST /v1/templates/{id}/workspace`
  - `POST /v1/templates/{id}/workspace/check`
  - `POST /v1/templates/{id}/workspace/conflicts`
  - `POST /v1/templates/{id}/workspace/diff`
  - `POST /v1/templates/{id}/workspace/fixtures`
  - `POST /v1/templates/{id}/workspace/resources`
  - `POST /v1/templates/{id}/workspace/resources/{resourceId}/remove`
  - `POST /v1/templates/{id}/workspace/restore`
  - `POST /v1/templates/{id}/workspace/save`
  - `POST /v1/unsubscribe-groups`
  - `POST /v1/unsubscribe-groups/{id}/default`
  - `POST /v1/unsubscribe-groups/{id}/members`
  - `POST /v1/webhooks/{id}/deliveries/{deliveryId}/redeliver`
  - `POST /v1/webhooks/{id}/rotate-secret`
  - `PUT /v1/journeys/{id}/draft`
  - `PUT /v1/templates/{id}/workspace/assets`
- Changed schemas:
  - `ActorId`
  - `ActorTracking`
  - `ApiKey`
  - `ApiKeyPermissions`
  - `ApiKeyWithSecret`
  - `BillingProviderError`
  - `CampaignContent`
  - `CampaignContentInput`
  - `CampaignLatestRun`
  - `CampaignRun`
  - `ConflictError`
  - `Contact`
  - `ContactAccessConfig`
  - `ContactActivitySummary`
  - `ContactIdentity`
  - `ContactListItem`
  - `ContactPreferences`
  - `Conversation`
  - `ConversationDetail`
  - `ConversationMetadata`
  - `ConversationMetrics`
  - `ConversationParticipant`
  - `CreateTemplatePayload`
  - `CreateWebhookPayload`
  - `CustomTrackingStatus`
  - `DeliverabilityFacts`
  - `Design`
  - `DesignSettings`
  - `DispatchSendMessagePayload`
  - `DomainName`
  - `EmailAttachment`
  - `EmailCampaignContent`
  - `EmailCampaignContentInput`
  - `EmailChannelError`
  - `EmailContent`
  - `EmailDispatchContent`
  - `EmailDispatchSendMessagePayload`
  - `EmailDomainDetailed`
  - `EmailDomainVerification`
  - `ExternalServiceError`
  - `FlagDisabledError`
  - `ForbiddenError`
  - `HumanProfile`
  - `InternalError`
  - `MailboxExtensionId`
  - `Message`
  - `MessageContact`
  - `Operation`
  - `Organization`
  - `PaginationMeta`
  - `PaymentRequiredError`
  - `RateLimitedError`
  - `ResourceNotFoundError`
  - `SendMessagePayload`
  - `Template`
  - `TemplateCompliance`
  - `TemplateFamily`
  - `TemplatePerformance`
  - `TemplateSourceVersionId`
  - `TemplateSummary`
  - `TemplateVariable`
  - `ThemeColors`
  - `UnauthorizedError`
  - `UpdateTemplatePayload`
  - `UpdateWebhookPayload`
  - `ValidationError`
  - `WebhookEndpoint`
  - `WebhookEnqueueError`


## 2026-08-31.1

- Initial canonical OpenAPI 3.1 artifact for the Samva email API.
- Includes 172 operations, 129 paths, 147 schemas, and Samva metadata for scopes, retryability,
  idempotency, sensitive values, error categories, and branded identifiers.
