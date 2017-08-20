export const enum ModificationStatus {
  Analysis = 1,
  AnalysisReview,
  Code,
  CodeReview,
  Merge,
  Test,
  Documentation,
  FinalReview,
  Complete
}

export namespace ModificationStatusHelper {
  export function toString(status: ModificationStatus) {
    switch (status) {
      case ModificationStatus.Analysis:
        return "Analysis";
      case ModificationStatus.AnalysisReview:
        return "Analysis Review";
      case ModificationStatus.Code:
        return "Code";
      case ModificationStatus.CodeReview:
        return "Code Review";
      case ModificationStatus.Merge:
        return "Merge";
      case ModificationStatus.Test:
        return "Test";
      case ModificationStatus.Documentation:
        return "Documenttation";
      case ModificationStatus.FinalReview:
        return "Final Review";
      case ModificationStatus.Complete:
        return "Complete";
    }
  }
}
