#define APPROVALS_GOOGLETEST
#include "ApprovalTests.hpp"

#include <memory>
auto defaultReporterDisposer =
        ApprovalTests::Approvals::useAsDefaultReporter(std::make_shared<ApprovalTests::ClipboardReporter>());
