import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, leading to information bubbles and reduced content diversity. Initial investigation suggests unbalanced training data may be responsible.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information when asked about emergency protocols. This could have led to dangerous situations if followed in real-world scenarios. Immediate model retraining and guardrails implementation required.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in conversation logs. While not containing PII, this represents a deviation from expected behavior and requires prompt resolution.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Unauthorized Access Attempt",
    description: "Detected pattern of automated attempts to exploit vulnerabilities in the AI authentication system. No breaches occurred due to security measures, but attack patterns suggest sophisticated approach.",
    severity: "Medium",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Critical Resource Allocation Failure",
    description: "AI system responsible for resource allocation in cloud infrastructure made decisions that created service outages affecting 15% of customers for 37 minutes. Root cause appears to be unexpected handling of peak traffic conditions.",
    severity: "High",
    reported_at: "2025-04-05T08:30:00Z"
  }
];