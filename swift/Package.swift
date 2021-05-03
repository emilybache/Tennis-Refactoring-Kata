// swift-tools-version:5.3

import PackageDescription

let package = Package(
    name: "Tennis",
    products: [
        .library(
            name: "Tennis",
            targets: ["Tennis"]),
    ],
    targets: [
        .target(
            name: "Tennis",
            dependencies: []),
        .testTarget(
            name: "TennisTests",
            dependencies: ["Tennis"]),
    ]
)
