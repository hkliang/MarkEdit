//
//  EvaluateJavaScriptIntent.swift
//  MarkEditMac
//
//  Created by cyan on 3/14/23.
//

import AppIntents

@available(macOS 13.0, *)
struct EvaluateJavaScriptIntent: AppIntent {
  static var title: LocalizedStringResource = "Evaluate JavaScript"
  static var description = IntentDescription("Evaluate JavaScript and get the result on the active document, throws an error if no editor is opened.")
  static var parameterSummary: some ParameterSummary {
    Summary("Evaluate JavaScript with \(\.$content)")
  }

  @Parameter(title: "Content", inputOptions: String.IntentInputOptions(capitalizationType: .none, multiline: true, autocorrect: false, smartQuotes: false, smartDashes: false))
  var content: String

  @MainActor func perform() async throws -> some IntentResult {
    guard let activeController else {
      throw IntentError.missingDocument
    }

    // We do not directly use the async version of evaluateJavaScript,
    // mainly because that it **sometimes** emits Optional(nil) unwrapping error.
    return try await withCheckedThrowingContinuation { continuation in
      activeController.webView.evaluateJavaScript(content) { value, error in
        // Here we have to deal with this typing hell
        continuation.resume(with: .success(.result(value: String(describing: value ?? error ?? "undefined"))))
      }
    }
  }
}
