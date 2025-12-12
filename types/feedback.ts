export interface EmotionScores {
  anger: number;
  frustration: number;
  sadness: number;
  joy: number;
  sarcasm: number;
  emotion_confidence: number;
}

export interface Entity {
  extracted_entity_text: string;
  canonical_entity_label: string | null;
  entity_label_confidence: number;
  entity_category: string | null;
  entity_category_confidence: number;
  extraction_method: string | null;
}

export interface Reason {
  extracted_reason_text: string;

  reason_label: string | null;
  reason_label_confidence: number;

  extraction_method: string;

  theme_label: string | null;
  theme_confidence: number;

  reason_sentiment_score: number;
  reason_sentiment_score_confidence: number;

  reason_emotion_scores: EmotionScores;

  reason_intent: string | null;
  reason_intent_confidence: number;

  reason_evidence_snippets: string[];
  reason_evidence_snippets_confidence: number;

  reason_suggested_action: string | null;

  entities: Entity[];
}

export interface Provenance {
  human_review_needed: boolean;
  trigger_reasons: string[];
}

export interface Feedback {
  feedback_id: string;

  clean_text: string;
  clean_text_confidence: number;

  one_liner_summary: string | null;
  one_liner_summary_confidence: number;

  feedback_language: string;
  feedback_language_confidence: number;

  reasons: Reason[];

  provenance: Provenance;
}
