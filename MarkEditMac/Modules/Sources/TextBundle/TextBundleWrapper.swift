//
//  TextBundleWrapper.swift
//
//  Created by cyan on 3/23/23.
//

import Foundation

/**
 Lightweight wrapper for [TextBundle](https://textbundle.org/).

 Typical structure:
  - assets/
  - info.json
  - text.markdown

 FileWrapper parsing is learned from: https://github.com/shinyfrog/TextBundle.
 */
public struct TextBundleWrapper {
  public let data: Data
  public let textFileName: String

  private let infoFileWrapper: FileWrapper?
  private let assetsFileWrapper: FileWrapper?

  public init(fileWrapper: FileWrapper) throws {
    guard let textFileWrapper = fileWrapper.fileWrappers?[fileWrapper.textFileName] else {
      throw TextBundleError.invalidBundle
    }

    guard let textFileData = textFileWrapper.regularFileContents else {
      throw TextBundleError.invalidBundle
    }

    // The example project by shinyfrog assumes all files are utf-8,
    // but here we keep the raw data and leave editors to handle it.
    data = textFileData
    textFileName = fileWrapper.textFileName

    infoFileWrapper = fileWrapper.fileWrappers?[FileNames.infoFile]
    assetsFileWrapper = fileWrapper.fileWrappers?[FileNames.assetsFolder]
  }

  public func textFilePath(baseURL: URL) -> String? {
    baseURL.appendingPathComponent(textFileName).path
  }

  /// Create a new FileWrapper with text file data.
  ///
  /// The example project by shinyfrog assumes all files are utf-8,
  /// but here we use the data encoded by editors.
  public func fileWrapper(with textFileData: Data) throws -> FileWrapper {
    let fileWrapper = FileWrapper(directoryWithFileWrappers: [:])
    fileWrapper.addRegularFile(withContents: textFileData, preferredFilename: textFileName)

    // For now, we don't change info.json, just add it back if we have
    if let infoFileWrapper {
      fileWrapper.addFileWrapper(infoFileWrapper)
    }

    // For now, we don't care about assets, just add it back if we have
    if let assetsFileWrapper {
      fileWrapper.addFileWrapper(assetsFileWrapper)
    }

    return fileWrapper
  }
}
